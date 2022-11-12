import clx from "classnames";
import { FC } from "react";
import { AuthButtonPropType } from "./Button.util";

const AuthButton: FC<AuthButtonPropType> = ({ disabled, onClick, label }) => {
  const { bg, text, common } = style;
  return (
    <div
      className={clx([disabled ? bg.disabled : bg.normal, common])}
      onClick={() => (disabled ? {} : onClick())}
    >
      <p className={disabled ? text.disabled : text.normal}>{label}</p>
    </div>
  );
};

const style = {
  common: "p-2 rounded-lg px-8 font-bold",
  bg: {
    disabled: "bg-black cursor-none",
    normal: "bg-orange cursor-pointer",
  },
  text: {
    disabled: "text-orange",
    normal: "text-black",
  },
};

export default AuthButton;
