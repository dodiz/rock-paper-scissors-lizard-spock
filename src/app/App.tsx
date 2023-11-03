import { FC, useState } from "react";
import { Selection, Header } from "@/components";
import { moves } from "@/data/moves";
import { Arena } from "@/components";
import { Move } from "@/types";
import styles from "./App.module.scss";

export const App: FC = () => {
  const [selected, setSelected] = useState<Move | null>(null);

  return (
    <div className={styles.container}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "100px",
          height: "50px",
          cursor: "pointer",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          background: "rgba(0,0,0,0.5)",
          lineHeight: "1",
        }}
        onClick={() => setSelected(null)}
      >
        RESET
      </div>
      <Header labels={moves.map((m) => m.name)} />
      <div className={styles.selection}>
        <Selection selected={selected} moves={moves} onSelect={setSelected} />
        {selected && <Arena selected={selected} />}
      </div>
    </div>
  );
};
