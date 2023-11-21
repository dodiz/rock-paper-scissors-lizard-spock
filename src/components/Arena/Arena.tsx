import { FC, useCallback, useState } from "react";
import classNames from "classnames";
import { Particles } from "@/components";
import { moves } from "@/data/moves";
import { useResponsive } from "@/hooks";
import { Opponent } from "./Opponent";
import { ArenaProps } from "./Arena.types";
import styles from "./Arena.module.scss";

export const Arena: FC<ArenaProps> = ({ selected, onWin, onReset }) => {
  const { isMobile } = useResponsive();
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
      {result !== "pending" && (
        <div className={styles.results}>
          <div className={styles.label}>
            {result === "win" && "You Win!"}
            {result === "lose" && "You Lose!"}
            {result === "draw" && "Draw!"}
          </div>
          <button className={styles.button} onClick={onReset}>
            Play Again
          </button>
        </div>
      )}
      <div className={styles.selectedContainer}>
        <div className={styles.pickedLabel}>You picked</div>
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
            <selected.Icon size={isMobile ? 90 : 180} />
          </div>
        </div>
      </div>
      <Opponent
        iconSize={isMobile ? 90 : 180}
        onSelected={handleResult}
        result={result}
      />
    </div>
  );
};
