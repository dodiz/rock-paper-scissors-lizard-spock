import { FC, useCallback, useState } from "react";
import classNames from "classnames";
import { Particles } from "@/components";
import { moves } from "@/data/moves";
import styles from "./Arena.module.scss";
import { Move } from "@/types";
import { Opponent } from "./Opponent";

export const Arena: FC<{ selected: Move; onWin: () => void }> = ({
  selected,
  onWin,
}) => {
  const [result, setResult] = useState<"pending" | "win" | "lose" | "draw">(
    "pending"
  );
  const handleResult = useCallback((index: number) => {
    if (selected.name === moves[index].name) setResult("draw");
    else if (selected.beats.includes(moves[index].name)) {
      onWin();
      setResult("win");
    } else setResult("lose");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.arena}>
      <div className={styles.selectedContainer}>
        {result === "win" && (
          <Particles width={800} height={800} speed={10} color="200,200,0" />
        )}
        <div
          className={classNames(
            result === "win" && styles.winner,
            result === "draw" && styles.draw
          )}
        >
          <div className={styles.selected}>
            <selected.Icon size={150} />
          </div>
        </div>
      </div>
      <Opponent onSelected={handleResult} result={result} />
    </div>
  );
};
