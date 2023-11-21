import { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import styles from "./Arena.module.scss";
import { Particles } from "..";
import { moves } from "@/data/moves";

export const Opponent: FC<{
  result: "pending" | "win" | "lose" | "draw";
  onSelected: (index: number) => void;
}> = ({ result, onSelected }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1 === moves.length ? 0 : p + 1));
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      const index = Math.floor(Math.random() * moves.length);
      setIndex(index);
      onSelected(index);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Random = useMemo(() => {
    const Icon = moves[index].Icon;
    return <Icon size={150} />;
  }, [index]);

  return (
    <div
      className={classNames(
        styles.opponentContainer,
        result !== "pending" && styles.reveal
      )}
    >
      {result === "pending" ? (
        <div className={styles.loadingParticles}>
          <Particles width={300} height={300} color="255, 255, 255" speed={3} />
        </div>
      ) : result === "lose" ? (
        <Particles width={800} height={800} speed={10} color="200,200,0" />
      ) : null}
      <div
        className={classNames(
          result === "lose" && styles.winner,
          result === "draw" && styles.draw
        )}
      >
        <div className={styles.opponent}>{Random}</div>
      </div>
    </div>
  );
};
