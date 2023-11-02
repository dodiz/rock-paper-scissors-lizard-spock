import { FC, PropsWithChildren } from "react";

export const IconWrapper: FC<
  PropsWithChildren & {
    mainColor: string;
    shadowColor: string;
  }
> = ({ mainColor, shadowColor, children }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "150px",
        height: "150px",
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
          width: "110px",
          height: "110px",
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
