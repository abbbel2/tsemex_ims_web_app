import { Box, TextField, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, Fragment, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  const [show, setShow] = useState(false);
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
          InputProps={{
            sx: {
              "&::placeholder": {
                color: "#000000",
                opacity: 0.9,
                fontSize: 15,
              },
            },
            // endAdornment: isPassword && (
            // <Box
            //   sx={{
            //     display: "flex",
            //     backgroundColor: "#DFDFDF",
            //     margin: 1,
            //   }}
            // >
            //   {!show ? (
            //     <VisibilityOffIcon
            //       fontSize="small"
            //       onClick={() => setShow(true)}
            //     />
            //   ) : (
            //     <RemoveRedEyeIcon
            //       fontSize="small"
            //       onClick={() => setShow(false)}
            //     />
            //   )}
            // </Box>
            // ),
          }}
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
    "& placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
  },
});

MainInput.defaultProps = {
  isPassword: false,
};

export default MainInput;
