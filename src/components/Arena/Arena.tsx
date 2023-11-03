import { FC, useEffect, useMemo, useState } from "react";
import { moves } from "@/data/moves";
import styles from "./Arena.module.scss";
import { Move } from "@/types";

export const Arena: FC<{ selected: Move }> = ({ selected }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1 === moves.length ? 0 : p + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const Random = useMemo(() => {
    const Icon = moves[index].Icon;
    return <Icon />;
  }, [index]);

  return (
    <div className={styles.arena}>
      <div className={styles.selected}>
        <selected.Icon />
      </div>
      <div className={styles.opponent}>{Random}</div>
    </div>
  );
};
