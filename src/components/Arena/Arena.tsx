import { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { Particles } from "@/components";
import { moves } from "@/data/moves";
import styles from "./Arena.module.scss";
import { Move } from "@/types";

export const Arena: FC<{ selected: Move }> = ({ selected }) => {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1 === moves.length ? 0 : p + 1));
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setIndex(Math.floor(Math.random() * moves.length));
      setReveal(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const Random = useMemo(() => {
    const Icon = moves[index].Icon;
    return <Icon />;
  }, [index]);

  return (
    <>
      {reveal
        ? selected.name === moves[index].name
          ? "You draw!"
          : selected.beats.includes(moves[index].name)
          ? "You win!"
          : "You lose!"
        : "Waiting for opponent..."}
      <div className={styles.arena}>
        <div className={styles.selected}>
          <selected.Icon />
        </div>
        <div
          className={classNames(
            styles.opponentContainer,
            reveal && styles.reveal
          )}
        >
          <div className={styles.particles}>
            <Particles
              color={reveal ? "150, 0, 0" : "255, 255, 255"}
              speed={reveal ? 20 : 3}
            />
          </div>
          <div className={styles.opponent}>{Random}</div>
        </div>
      </div>
    </>
  );
};
