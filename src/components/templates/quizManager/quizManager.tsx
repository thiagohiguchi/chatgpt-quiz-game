import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/atoms/button';
import { Spinner } from '@/components/atoms/spinner';
import Scoreboard from '@/components/molecules/scoreboard';
import QuizQuestions from '@/components/organisms/quizQuestions';
import { useUser } from '@/contexts/userContext';
import { useToast } from '@/hooks/use-toast';
import { PROMPT } from '@/lib/constants';
import {
  ActiveComponentProps,
  QuizQuestion,
  UserState,
} from '@/lib/interfaces';
import fallbackQuestions from '@/lib/sampleData.json';
import { getRandomThemesAsString } from '@/lib/utils';

const QuizManager = ({ setActiveComponent }: ActiveComponentProps) => {
  const [questions, setQuestions] = useState<UserState[]>([]);
  const [rankings, setRankings] = useState<UserState[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to control re-fetching
  const hasFetched = useRef(false); // Ref to track if data has been fetched
  const { user, setUser } = useUser();
  const { toast } = useToast();
  const sampleQuestions: QuizQuestion[] = fallbackQuestions;
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const fetchQuestions = async (): Promise<string[]> => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `${PROMPT}${getRandomThemesAsString()}` },
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

      // Attempt to parse the response if it's a JSON array
      const questions: QuizQuestion[] = JSON.parse(messageContent);

      return Array.isArray(questions) ? questions : [];
    } catch (error) {
      console.error(error);

      toast({
        variant: 'destructive',
        description:
          'Error fetching questions. Sample questions will be presented.',
      });

      return sampleQuestions;
    }
  };

  useEffect(() => {
    if (hasFetched.current) return; // Exit if already fetched
    hasFetched.current = true; // Mark as fetched

    const getQuestions = async () => {
      setLoading(true);
      const questionsData = await fetchQuestions();
      setQuestions(questionsData);
      setLoading(false);
    };

    getQuestions();

    // Load rankings from local storage when the component mounts
    const storedRankings = localStorage.getItem('rankings');
    if (storedRankings) {
      setRankings(JSON.parse(storedRankings));
    }
  }, []);

  useEffect(() => {
    // Save new user to local storage if valid
    if (user.name && user.score > -1 && user.isFinalScore) {
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
          <h4 className="font-heading text-white text-4xl text-center">
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
