import { Button } from '@/components/atoms/button';
import { ActiveComponentProps } from '@/lib/interfaces';

const Home = ({ setActiveComponent }: ActiveComponentProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white">
      <h1 className="text-white font-heading text-5xl">ChatGPT Quiz Game</h1>
      <p className="text-sm max-w-8/10 lg:max-w-96 mx-auto text-center">
        Challenge your knowledge with this fast-paced quiz game, packed with
        clever questions across categories—race against the clock, score points,
        and show off your trivia skills!
      </p>
      <Button variant="default" onClick={() => setActiveComponent('details')}>
        continue
      </Button>
    </div>
  );
};

export default Home;
