import { FC } from "react";
import { PageTitlePropType } from "./Title.util";

const PageTitle: FC<PageTitlePropType> = ({ title, size, width }) => {
  return (
    <div className="flex flex-col w-full">
      <p className={`font-face-rbxb font-bold text-[${size?.toString()}px]`}>
        {title}
      </p>
      <hr
        className={`w-[${(
          size! / 3
        ).toString()}px] h-2 bg-orange rounded border-0`}
      />
    </div>
  );
};

PageTitle.defaultProps = {
  size: 20,
  width: "16",
};

export default PageTitle;
