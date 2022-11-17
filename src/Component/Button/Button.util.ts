export type AuthButtonPropType = {
  disabled: boolean;
  onClick: Function;
  label: string;
};

export type MainButtonPropType = {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  handleClick?: Function;
  variant?: "text" | "outlined" | "contained" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  color?: string;
  width?: string;
};
