import { FC } from "react";
import { ForgotPasswordLinkPropType } from "./Link.util";

const ForgotPasswordLink: FC<ForgotPasswordLinkPropType> = ({
  handleClick,
}) => {
  return (
    <div className="text-sm">
      Forgot password?{" "}
      <span
        className="text-link cursor-pointer underline font-bold"
        onClick={handleClick}
      >
        Reset
      </span>
    </div>
  );
};

export default ForgotPasswordLink;
