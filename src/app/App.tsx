import { Selection } from "@/components";
import { FC } from "react";
import { moves } from "@/data/moves";

export const App: FC = () => {
  return (
    <>
      <Selection moves={moves.map((move) => move.icon)} />
    </>
  );
};
