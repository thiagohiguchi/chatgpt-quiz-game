import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input";
import { Label } from "components/atoms/label";
import { ActiveComponentProps } from "../../../lib/interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "components/atoms/dialog";
import { useUser } from "../../../contexts/userContext"; // Adjust the path as necessary

const Details = ({ setActiveComponent }: ActiveComponentProps) => {
  const { user, setUser } = useUser();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, name: event.target.value }));
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

      {/* <Button variant="default" onClick={() => setActiveComponent("quiz")}>
        start now!
      </Button> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Continue</Button>
        </DialogTrigger>
        <DialogContent className="bg-black sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">
              Select your username
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="name" className="sr-only">
                Username
              </Label>
              <Input
                id="name"
                defaultValue="random123"
                value={user.name}
                onChange={handleNameChange}
              />
            </div>
            {/* <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
            </Button> */}
          </div>
          <DialogFooter className="sm:justify-center">
            {/* <DialogSubmit asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose> */}
            <Button
              variant="default"
              onClick={() => setActiveComponent("quiz")}
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
