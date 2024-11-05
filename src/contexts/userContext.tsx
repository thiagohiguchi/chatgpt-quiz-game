import { UserState } from "../lib/interfaces";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
interface UserContextType {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
}

// Create the User Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to use the User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Create a UserProvider component
export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState>({
    name: "",
    score: -1,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};