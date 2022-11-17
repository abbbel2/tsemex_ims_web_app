/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerListItemPropType } from "../Layout.util";

const DrawerListItem: FC<DrawerListItemPropType> = ({
  item: { route, name, Icon },
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const DrawerItemClass = classNames(
    "flex flex-row items-center justift-center rounded-md py-[11px] pl-[15px] cursor-pointer",
    {
      "bg-[#ffffff] text-[#F0A500]": location.pathname === `/${route}`,
    },
    {
      "text-[#fff]": !(location.pathname === `/${route}`),
    }
  );

  return (
    <div className={DrawerItemClass} onClick={() => navigate(`/${route}`)}>
      <Icon sx={{ fontSize: 21 }} />
      <p className="pl-[16px] text-[15px] font-medium">{name}</p>
    </div>
  );
};

export default DrawerListItem;
