import { Component, ReactNode } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DownloadIcon from "@mui/icons-material/Download";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import UndoIcon from "@mui/icons-material/Undo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleIcon from "@mui/icons-material/People";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
export type DrawerPropType = {};
export type MainLayoutPropType = {
  children: ReactNode;
};

export type DrawerListItemPropType = {
  item: DrawerListType;
};

export const DrawerData: DrawerListType[] = [
  {
    name: "Dashboard",
    route: "",
    Icon: DashboardIcon,
  },
  {
    name: "Inventory",
    route: "inventory",
    Icon: AssignmentTurnedInIcon,
  },
  {
    name: "Goods Received",
    route: "goods_recieved",
    Icon: DownloadIcon,
  },
  {
    name: "Requisitions",
    route: "requisitions",
    Icon: DashboardIcon,
  },
  {
    name: "Inter Store Transfers",
    route: "inter_store_transfers",
    Icon: CompareArrowsIcon,
  },
  {
    name: "Returned Goods",
    route: "returned_goods",
    Icon: UndoIcon,
  },
  {
    name: "Purchase Orders",
    route: "purchase_orders",
    Icon: ShoppingCartIcon,
  },
  {
    name: "Stores",
    route: "stores",
    Icon: StorefrontIcon,
  },
  {
    name: "Catalogue",
    route: "catelogue",
    Icon: FormatListBulletedIcon,
  },
  {
    name: "Users",
    route: "user",
    Icon: PeopleIcon,
  },
];

type DrawerListType = {
  name: string;
  route: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};
