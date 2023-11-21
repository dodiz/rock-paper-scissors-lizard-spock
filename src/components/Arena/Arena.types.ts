import { Move } from "@/types";

export type ArenaProps = {
  selected: Move;
  onReset: () => void;
  onWin: () => void;
};
