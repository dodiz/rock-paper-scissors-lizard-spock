import { FC } from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ labels, score }) => {
  return (
    <div
      className={styles.container}
      style={{
        animationDelay: `${0.2 * labels.length}s`,
      }}
    >
      <div className={styles.labels}>
        {labels.map((label) => (
          <p key={label}>{label}</p>
        ))}
      </div>
      <div className={styles.score}>
        <p className={styles.label}>Score</p>
        <p className={styles.value}>{score}</p>
      </div>
    </div>
  );
};
