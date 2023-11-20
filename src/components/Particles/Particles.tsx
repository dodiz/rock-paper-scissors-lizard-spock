import { ElementRef, FC, useEffect, useRef } from "react";
import { UI } from "./UI";
import styles from "./Particles.module.scss";
import { ParticlesProps } from "./Particles.types";

export const Particles: FC<ParticlesProps> = ({
  width,
  height,
  speed,
  color,
}) => {
  const ref = useRef<ElementRef<"canvas">>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const ui = new UI(canvas, speed, color);
    ui.animate();

    return () => ui.clear();
  }, [speed, color]);

  return (
    <canvas
      className={styles.particles}
      width={width}
      height={height}
      ref={ref}
    />
  );
};
