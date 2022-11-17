import { FC } from "react";
import { ForgotPasswordLinkPropType } from "./Link.util";

const ForgotPasswordLink: FC<ForgotPasswordLinkPropType> = ({
  handleClick,
}) => {
  return (
    <div className="text-sm font-bold">
      Forgot password?{" "}
      <span
        className="text-link cursor-pointer underline font-extrabold"
        onClick={handleClick}
      >
        Reset
      </span>
    </div>
  );
};

export default ForgotPasswordLink;
