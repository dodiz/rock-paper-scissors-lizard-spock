import {
  LizardIcon,
  PaperIcon,
  RockIcon,
  ScissorsIcon,
  SpockIcon,
} from "@/icons";

export const moves = [
  {
    name: "rock",
    beats: ["scissors", "lizard"],
    icon: RockIcon,
  },
  {
    name: "paper",
    beats: ["rock", "spock"],
    icon: PaperIcon,
  },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
    icon: ScissorsIcon,
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
    icon: LizardIcon,
  },
  {
    name: "spock",
    beats: ["scissors", "rock"],
    icon: SpockIcon,
  },
];
