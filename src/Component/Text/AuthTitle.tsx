import { FC } from "react";
import { AuthTitlePropType } from "./Text.util";

const AuthTitle: FC<AuthTitlePropType> = ({ text }) => {
  return (
    <p className="font-face-rbb font-900 text-2xl font-black pt-12 -tracking-4">
      {text}
    </p>
  );
};

export default AuthTitle;
