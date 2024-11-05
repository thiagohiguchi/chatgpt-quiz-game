import { useState } from 'react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { ActiveComponentProps } from '@/lib/interfaces';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/dialog';

import { useUser } from '@/contexts/userContext'; // Adjust the path as necessary

const Details = ({ setActiveComponent }: ActiveComponentProps) => {
  const { user, setUser } = useUser();
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isValid = /^[a-zA-Z0-9]+$/.test(newName);

    // Validate the input
    if (newName.trim() === '') {
      setValidationError('Username cannot be empty.');
    } else if (!isValid) {
      setValidationError('Username can only contain letters and numbers.');
    } else {
      setValidationError(null);
    }

    // Update user state if valid or allow empty input for clearing
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  // Handle enter key to submit
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !validationError) {
      setActiveComponent('quiz');
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white">
      <h1 className="text-white font-heading text-5xl">How the game works</h1>
      <div className="text-sm max-w-8/10 mx-auto text-center">
        <p>There will be a total of ten questions.</p>
        <p>
          Each question will present four alternatives, only a single one is
          correct.
        </p>
        <p>You have 15 seconds for each question.</p>
        <p>
          There will be a progress bar on the top of the screen showing the time
          left.
        </p>
        <p>You cannot move to previous questions</p>
        <p>Your score will be higher if you respond faster and correctly.</p>
        <p>
          If you are not sure about an answer, take a guess and move forward.
        </p>
      </div>

      <h1 className="text-white font-heading text-xl">Are you ready?</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Continue</Button>
        </DialogTrigger>
        <DialogContent className="bg-black sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">
              Select your username
            </DialogTitle>
            <DialogDescription className="text-white text-sm">
              Use only letters and numbers
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="name" className="sr-only">
                Username
              </Label>
              <Input
                type="text"
                id="name"
                value={user.name}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                className={validationError ? 'bg-red-300 border-red-500' : ''}
              />
              {validationError && (
                <p className="text-red-300 text-sm">{validationError}</p>
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button
              variant="default"
              onClick={() => setActiveComponent('quiz')}
              disabled={!!validationError}
            >
              start now!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Details;
