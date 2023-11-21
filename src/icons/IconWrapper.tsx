import { FC, PropsWithChildren } from "react";

export const IconWrapper: FC<
  PropsWithChildren & {
    mainColor: string;
    shadowColor: string;
    size: number;
  }
> = ({ mainColor, shadowColor, children, size }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: size * 1.4,
        height: size * 1.4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColor,
        boxShadow: `inset 0px -7px 0 0 ${shadowColor}`,
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(0deg, #F3F3F3, #DADADA 100%)",
          boxShadow: "inset 0px 7px 0 0 #BABFD4",
        }}
      >
        {children}
      </div>
    </div>
  );
};
