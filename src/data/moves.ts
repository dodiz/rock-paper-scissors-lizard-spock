import {
  LizardIcon,
  PaperIcon,
  RockIcon,
  ScissorsIcon,
  SpockIcon,
} from "@/icons";
import { Move } from "@/types";

export const moves: Move[] = [
  {
    name: "rock",
    beats: ["scissors", "lizard"],
    Icon: RockIcon,
  },
  {
    name: "paper",
    beats: ["rock", "spock"],
    Icon: PaperIcon,
  },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
    Icon: ScissorsIcon,
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
    Icon: LizardIcon,
  },
  {
    name: "spock",
    beats: ["scissors", "rock"],
    Icon: SpockIcon,
  },
];
