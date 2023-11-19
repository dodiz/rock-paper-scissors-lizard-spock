import { FC, useState } from "react";
import { Selection, Header, Arena } from "@/components";
import { moves } from "@/data/moves";
import { Move } from "@/types";
import styles from "./App.module.scss";
import { Reset } from "./Reset";

export const App: FC = () => {
  const [selected, setSelected] = useState<Move | null>(null);

  return (
    <div className={styles.container}>
      <Reset onClick={() => setSelected(null)} />
      <Header labels={moves.map((m) => m.name)} />
      <div className={styles.selection}>
        <Selection selected={selected} moves={moves} onSelect={setSelected} />
        {selected && <Arena selected={selected} />}
      </div>
    </div>
  );
};
