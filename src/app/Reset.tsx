import { FC } from "react";

export const Reset: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "5rem 10rem",
        cursor: "pointer",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        background: "rgba(0,0,0,0.5)",
        lineHeight: "1",
      }}
      onClick={onClick}
    >
      RESET
    </div>
  );
};
