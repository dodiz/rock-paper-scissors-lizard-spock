import { FC, useState } from "react";
import { Selection, Header, Arena } from "@/components";
import { moves } from "@/data/moves";
import { Move } from "@/types";
import styles from "./App.module.scss";

export const App: FC = () => {
  const [selected, setSelected] = useState<Move | null>(null);
  const [score, setScore] = useState(0);

  return (
    <div className={styles.container}>
      <Header score={score} labels={moves.map((m) => m.name)} />
      <div className={styles.selection}>
        {!selected ? (
          <Selection selected={selected} moves={moves} onSelect={setSelected} />
        ) : (
          <Arena
            onReset={() => setSelected(null)}
            onWin={() => setScore((p) => p + 1)}
            selected={selected}
          />
        )}
      </div>
    </div>
  );
};
