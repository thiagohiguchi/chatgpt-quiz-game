import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button } from '@/components/atoms/button';
import { Spinner } from '@/components/atoms/spinner';
import Scoreboard from '@/components/molecules/scoreboard';
import QuizQuestions from '@/components/organisms/quizQuestions';
import { useUser } from '@/contexts/userContext';
import {
  ActiveComponentProps,
  QuizQuestion,
  UserState,
} from '@/lib/interfaces';
import fallbackQuestions from '@/lib/sampleData.json';

const QuizManager = ({ setActiveComponent }: ActiveComponentProps) => {
  const [questions, setQuestions] = useState<UserState[]>([]);
  const [rankings, setRankings] = useState<UserState[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to control re-fetching
  const [fetchAgain, setFetchAgain] = useState<boolean>(false); // State to control re-fetching
  const { user, setUser } = useUser();
  const sampleQuestions: QuizQuestion[] = fallbackQuestions;
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const prompt = `
    Generate a random trivia questionnaire with the following themes nature, science, countries, movies, curiosity, planets, foods, simple math, and fun facts.
    The questionnaire must have 10 questions, along with 4 answer choices for each question. 
    Only return the array in the response with no additional text, explanation, or formatting.
    Make sure the entire response is a valid JSON array, formatted with double quotes for keys and string values. 
    Format the response as:

    [{
      "question": string,
      "correctAnswer": 0 | 1 | 2 | 3,
      "answers": [string, string, string, string],
    }]

    Only one of the answers should be correct. Make the question general and suitable for all ages.
  `;

  const sanitizeJsonResponse = (jsonString: string): string | null => {
    // Step 1: Trim whitespace and quotes
    const trimmedString = jsonString
      .trim()
      .replace(/^(["'])|(["'])(?=$)/g, '')
      .replace(/\\\"/g, '"') // Replace escaped double quotes
      .replace(/\\\\/g, '\\') // Replace double backslashes
      .replace(/'/g, '"'); // Replace single quotes with double quotes, if needed

    // Step 2: Check for valid structure
    if (
      !(trimmedString.startsWith('[') && trimmedString.endsWith(']')) &&
      !(trimmedString.startsWith('{') && trimmedString.endsWith('}'))
    ) {
      console.error(
        'Invalid JSON format: must start with [ or { and end with ] or }',
        trimmedString
      );
      return null;
    }

    // Step 3: Replace single quotes with double quotes
    const replacedQuotesString = trimmedString.replace(/'/g, '"');

    // Step 4: Escape double quotes and backslashes
    const escapedString = replacedQuotesString
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/"/g, '\\"'); // Escape double quotes

    return escapedString;
  };

  // // Set up your OpenAI API key
  const fetchQuestions = async (): Promise<string[]> => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const messageContent = response.data.choices[0].message.content;

      // console.log(`messageContent`, messageContent);
      // Attempt to parse the response if it's a JSON array
      // const questions = JSON.parse(messageContent) as QuizQuestion[];
      const questions: QuizQuestion[] = JSON.parse(
        sanitizeJsonResponse(messageContent)
      );

      // if (!messageContent || messageContent.trim() === '' || !messageContent.trim().startsWith('[') || !messageContent.trim().endsWith(']')) {
      //   console.error("Invalid JSON format: must be a non-empty string representing an array.");
      //   return null;
      // }

      console.log('questions', questions);
      // If parsing fails, return a default array or handle the error as needed
      return Array.isArray(questions) ? questions : [];
    } catch (error) {
      console.error('Error fetching questions:', error);
      return sampleQuestions;
    }
  };

  useEffect(() => {
    if (loading && questions.length == 0) {
      const getQuestions = async () => {
        setLoading(true);
        const questionsData = await fetchQuestions();
        setQuestions(questionsData);
        // throw Error('e');
        setLoading(false);
      };

      getQuestions();
    }
  }, []);

  useEffect(() => {
    // Load rankings from local storage when the component mounts
    const storedRankings = localStorage.getItem('rankings');
    if (storedRankings) {
      setRankings(JSON.parse(storedRankings));
    }
  }, []);

  useEffect(() => {
    // Save new user to local storage if valid
    if (user.name && user.score > -1 && user.isFinalScore) {
      // if (user.score > -1) {
      // Create a copy of the current rankings
      const updatedRankings = [...rankings];

      // Insert the new user at the correct position
      const newUser = user;
      let insertIndex = updatedRankings.length; // Default to the end

      for (let i = 0; i < updatedRankings.length; i++) {
        if (newUser.score > updatedRankings[i].score) {
          insertIndex = i;
          break;
        }
      }

      // Insert the new user into the sorted rankings
      updatedRankings.splice(insertIndex, 0, newUser);

      // Save updated rankings to local storage
      setRankings(updatedRankings);
      localStorage.setItem('rankings', JSON.stringify(updatedRankings));
    }
  }, [user.isFinalScore]); // Run this effect whenever the user prop changes

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-white font-heading text-xl">
            Loading questions, wait a minute
          </h4>
          <Spinner />
        </div>
      ) : !user.isFinalScore && questions ? (
        <QuizQuestions questions={questions} />
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <h4 className="font-heading text-white text-4xl">
            Congrats! You scored{' '}
            <span className="text-primary">{user.score}</span> points!
          </h4>
          <Scoreboard rankings={rankings} />

          <Button
            variant="default"
            onClick={() => {
              setUser((prevUser) => ({
                ...prevUser,
                name: '',
                score: -1,
                isFinalScore: false,
              }));
              setActiveComponent('details');
            }}
          >
            play again
          </Button>
          <Button variant="outline" onClick={() => setActiveComponent('home')}>
            go home
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizManager;
