import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, Fragment, useState } from "react";
import { MainTextFieldPropType } from "./TextField.util";

const MainInput: FC<MainTextFieldPropType> = ({
  placeholder,
  value,
  handleChange,
  errors,
  touched,
  name,
  isPassword,
}) => {
  return (
    <Fragment>
      <div className="flex flex-col w-full">
        <StyledTextField
          name={name}
          id={name}
          type={isPassword ? "password" : "text"}
          value={value[name]}
          onChange={handleChange}
          error={touched[name] && Boolean(errors[name])}
          helperText={touched[name] && errors[name]}
          size="medium"
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
};

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "lightgreen",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiInputBase-input": {
    fontFamily: "Rubik",
    fontWeight: "5px",
    backgroundColor: "#DFDFDF",
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 3.3,
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderWidth: 3.3,
      borderColor: "transparent",
    },
    "& ::placeholder": {
      opacity: 0.7,
    },
  },
});

MainInput.defaultProps = {
  isPassword: false,
};

export default MainInput;
