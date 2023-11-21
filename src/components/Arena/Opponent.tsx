import { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { Particles } from "@/components";
import { moves } from "@/data/moves";
import styles from "./Arena.module.scss";

type OpponentProps = {
  result: "pending" | "win" | "lose" | "draw";
  iconSize: number;
  onSelected: (index: number) => void;
};

export const Opponent: FC<OpponentProps> = ({
  result,
  onSelected,
  iconSize,
}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (result !== "pending") return;
    const interval = setInterval(() => {
      setIndex((p) => (p + 1 === moves.length ? 0 : p + 1));
    }, 100);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      const index = Math.floor(Math.random() * moves.length);
      setIndex(index);
      onSelected(index);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onSelected, result]);

  const Random = useMemo(() => {
    const Icon = moves[index].Icon;
    return <Icon size={iconSize} />;
  }, [index, iconSize]);

  return (
    <div
      className={classNames(
        styles.opponentContainer,
        result !== "pending" && styles.reveal
      )}
    >
      <div className={styles.pickedLabel}>The House picked</div>
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
