import { FC, useMemo } from "react";
import { useResponsive } from "@/hooks";
import { SelectionProps } from "./Selection.types";
import styles from "./Selection.module.scss";

const animationMoveDuration = 0.3;
const animationMoveDelay = 0.1;
export const Selection: FC<SelectionProps> = ({
  moves,
  onSelect,
  selected,
}) => {
  const { isMobile } = useResponsive();
  const radius = useMemo(() => (isMobile ? 140 : 180), [isMobile]);

  const angle = useMemo(() => (2 * Math.PI) / moves.length, [moves]);
  const outline = useMemo(() => {
    const path =
      "M" +
      Array(moves.length + 1)
        .fill(0)
        .map(
          (_, i) =>
            `${radius + radius * Math.sin(angle * i)} ${
              radius + radius * -Math.cos(angle * i)
            }`
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
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        stroke="black"
        strokeWidth="25"
        fill="none"
      >
        <path d={path} />
      </svg>
    );
  }, [moves, angle, radius]);

  return (
    <div className={styles.container + " " + (!!selected && styles.selected)}>
      <div
        className={styles.ring}
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        {outline}
        {moves.map((move, i) => (
          <div
            key={i}
            onClick={() => onSelect(move)}
            className={
              styles.move + " " + (selected === move && styles.selected)
            }
            style={{
              translate:
                selected === move
                  ? `calc(${radius}px - 50%) calc(${radius}px - 50%)`
                  : `calc(-50% + ${
                      radius + radius * Math.sin(angle * i)
                    }px) calc(-50% + ${
                      radius + radius * -Math.cos(angle * i)
                    }px)`,
              animationDelay: `${animationMoveDelay * i}s`,
              animationDuration: `${animationMoveDuration}s`,
            }}
          >
            <move.Icon size={isMobile ? 90 : 120} />
          </div>
        ))}
      </div>
    </div>
  );
};
