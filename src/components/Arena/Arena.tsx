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
  const result = useMemo(() => {
    if (selected.name === moves[index].name) return "draw";
    if (selected.beats.includes(moves[index].name)) return "win";
    return "lose";
  }, [index, selected]);
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
        <div className={styles.selectedContainer}>
          {reveal && result === "win" && (
            <Particles width={800} height={800} speed={10} color="200,200,0" />
          )}
          <div className={classNames(result === "win" && styles.winner)}>
            <div className={styles.selected}>
              <selected.Icon />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.opponentContainer,
            reveal && styles.reveal
          )}
        >
          {!reveal ? (
            <div className={styles.loadingParticles}>
              <Particles
                width={300}
                height={300}
                color="255, 255, 255"
                speed={3}
              />
            </div>
          ) : result === "lose" ? (
            <Particles width={800} height={800} speed={10} color="200,200,0" />
          ) : null}
          <div className={classNames(result === "lose" && styles.winner)}>
            <div className={styles.opponent}>{Random}</div>
          </div>
        </div>
      </div>
    </>
  );
};
