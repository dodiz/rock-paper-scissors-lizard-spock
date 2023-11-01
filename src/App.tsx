import {
  LizardIcon,
  PaperIcon,
  RockIcon,
  ScissorsIcon,
  SpockIcon,
} from "@/icons";
import { Selection } from "@/components";

function App() {
  return (
    <>
      <Selection
        moves={[
          <ScissorsIcon />,
          <PaperIcon />,
          <RockIcon />,
          <LizardIcon />,
          <SpockIcon />,
        ]}
      />
    </>
  );
}

export default App;
