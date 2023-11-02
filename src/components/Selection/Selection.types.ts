import { Move } from "@/types";

export type SelectionProps = {
  moves: Move[];
  selected: Move | null;
  onSelect: (move: Move) => void;
};
