import { FC } from "react";
import { MainLayoutPropType } from "./Layout.util";
import { Box } from "@mui/material";
import DrawerComponent from "./Drawer";
import PerfectScrollbar from "react-perfect-scrollbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const MainLayout: FC<MainLayoutPropType> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DrawerComponent />
      <Box
        component="main"
        sx={{
          backgroundColor: "#F9F9F9",
          flexGrow: 1,
          height: "100vh",
          // overflow: "hidden",
        }}
      >
        <PerfectScrollbar style={{ height: "100vh" }}>
          <div className="m-8">{children}</div>
        </PerfectScrollbar>
      </Box>
    </Box>
  );
};

export default MainLayout;
