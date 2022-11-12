import { ChangeEventHandler } from "react";

export type MainTextFieldPropType = {
  placeholder: string;
  value: any;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errors: any;
  touched: any;
  name: string;
  isPassword: boolean;
};
