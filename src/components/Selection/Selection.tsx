import { FC, useMemo } from "react";
import { SelectionProps } from "./Selection.types";
import styles from "./Selection.module.scss";

const r = 200;
const animationMoveDuration = 0.3;
const animationMoveDelay = 0.1;

export const Selection: FC<SelectionProps> = ({ moves }) => {
  const angle = useMemo(() => (2 * Math.PI) / moves.length, [moves]);
  const outline = useMemo(() => {
    const path =
      "M" +
      Array(moves.length + 1)
        .fill(0)
        .map(
          (_, i) =>
            `${r + r * Math.sin(angle * i)} ${r + r * -Math.cos(angle * i)}`
        )
        .join("L");

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animationDelay: `${
            animationMoveDuration + animationMoveDelay * moves.length
          }s`,
        }}
        className={styles.outline}
        viewBox={`0 0 ${r * 2} ${r * 2}`}
        stroke="black"
        strokeWidth="25"
        fill="none"
      >
        <path d={path} />
      </svg>
    );
  }, [moves, angle]);

  return (
    <div className={styles.container}>
      <div
        className={styles.ring}
        style={{
          width: r * 2,
          height: r * 2,
        }}
      >
        {outline}
        {moves.map((Icon, i) => (
          <div
            key={i}
            className={styles.move}
            style={{
              top: r + r * -Math.cos(angle * i),
              left: r + r * Math.sin(angle * i),
              animationDelay: `${animationMoveDelay * i}s`,
              animationDuration: `${animationMoveDuration}s`,
            }}
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};
