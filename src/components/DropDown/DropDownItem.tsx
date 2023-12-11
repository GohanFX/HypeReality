import { MouseEventHandler, ReactElement } from "react";
import { IconType } from "react-icons";

const DropDownItem = ({
  children,
  handler,
  icon
}: {
  children: React.ReactNode;
  handler?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactElement;
}) => {
  return (
    <li>
      <div onClick={handler} className="w-full text-lg p-2 space-x-2 drop-shadow-lg hover:bg-background first:rounded-md text-secondary hover:text-primary transition-colors flex items-center">
        <span className="pt-1">{icon}</span> <span> {children}</span>
      </div>
    </li>
  );
};
export default DropDownItem;