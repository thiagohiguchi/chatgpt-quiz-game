import { useEffect, useState } from "react";
import { UserState } from "../../../lib/interfaces";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/atoms/table";
import { useUser } from "../../../contexts/userContext"; // Adjust the path as necessary

interface UserStateProps {
  rankings: UserState[];
}

const Scoreboard = ({ rankings }: UserStateProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white my-4 md:my-6">
      <h2 className="text-white font-heading text-5xl">Scoreboard</h2>

      {/* {rankings.length > 0 ? 
      ( */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-heading text-white text-md w-[100px]">
              Player
            </TableHead>
            <TableHead className="font-heading text-white text-md text-right">
              score
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rankings.map((user) => (
            <TableRow key={1}>
              <TableCell className="text-md bold font-medium">
                {user.name}
              </TableCell>
              <TableCell className="text-md bold text-right">
                {user.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* )
       ?
        (<p className="text-lg text-white">
         There are no ranked players.
       </p> )
} */}
    </div>
  );
};

export default Scoreboard;
