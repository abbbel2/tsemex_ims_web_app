import { styled } from "@mui/material/styles";
import { FC } from "react";
import { MainButtonPropType } from "./Button.util";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";

const Button: FC<MainButtonPropType> = ({
  label,
  disabled,
  loading,
  handleClick,
  variant,
  size,
  type,
  color,
  width,
}) => {
  const handleButton = () => {
    if (disabled) return () => {};
    if (handleClick) return handleClick();
    return undefined;
  };

  const CustomButton = styled(LoadingButton)((props) => {
    return {
      boxShadow: "none",
      textTransform: "none",
      borderRadius: 10,
      fontSize: "16px",
      fontWeight: 800,
      color: "#000000",
      padding: "9px 20px",
      backgroundColor: "#F0A500",
      borderColor: "#F0A500",
      "&:hover": {
        backgroundColor: "#F0A500",
        borderColor: "#F0A500",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#F0A500",
        borderColor: "#F0A500",
      },
      "&:disabled": {
        backgroundColor: "#000000",
        color: loading ? "#000000" : "#F0A500",
      },
    };
  });

  return (
    <CustomButton
      variant={variant ?? "contained"}
      disableRipple
      disabled={disabled}
      loading={loading}
      type={type ?? "button"}
      onClick={handleButton}
      size={size}
      loadingIndicator={<CircularProgress sx={{ color: "black" }} size={16} />}
    >
      {label}
    </CustomButton>
  );
};

Button.defaultProps = {
  color: "#F0A500",
  width: "100%",
  size: "medium",
  variant: "contained",
};

export default Button;
