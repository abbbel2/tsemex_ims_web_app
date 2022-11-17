/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Avatar, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import config from "../../Config/common.config.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DrawerListItem from "./Components/DrawerListItem";
import { DrawerData } from "./Layout.util";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#00539F",
    width: config.ui.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: 0,
      },
    }),
  },
}));

function DrawerComponent() {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Toolbar>
        <div className="flex flex-col mt-4 mx-0 w-full">
          <div className="flex flex-row items-center justify-center cursor-pointer pt-2">
            <img
              className="w-8/12"
              src="/assets/images/Tsemex_brand_white/Tsemex_brand_white@2x.png"
              onClick={() => navigate("/")}
              alt="logo"
            />
          </div>
          <div className="flex flex-row justify-between items-center pt-8">
            <div className="flex flex-row items-center text-white font-semibold text-xs">
              <Avatar src="/assets/images/user.webp" />
              <p className="pl-4">Elon Musk</p>
            </div>
            <div className="flex flex-row items-center justify-center text-xs text-orange font-bold">
              <p style={{ fontSize: 12 }} className="underline">
                LOGOUT
              </p>
              <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            </div>
          </div>
        </div>
      </Toolbar>
      <div className="pt-4">
        <List component="nav">
          <div className="px-4">
            {DrawerData.map((item, index) => (
              <DrawerListItem item={item} key={index} />
            ))}
          </div>
        </List>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;
