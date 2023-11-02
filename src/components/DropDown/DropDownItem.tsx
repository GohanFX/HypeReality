import Link from "next/link";
import { MouseEventHandler, ReactElement } from "react";
import { IconType } from "react-icons";

const DropDownItem = ({
  children,
  handler,
  icon,
  href
}: {
  children: React.ReactNode;
  handler?: MouseEventHandler<any>;
  icon?: ReactElement;
  href: string
}) => {
  return (
    <Link href={href}  onClick={handler}>
      <li onClick={() => {}}>
        <div
         
          className="w-full text-lg p-2 space-x-2 drop-shadow-lg hover:bg-background first:rounded-md text-secondary hover:text-primary transition-colors flex items-center"
        >
          <span className="pt-1">{icon}</span> <span> {children}</span>
        </div>
      </li>
    </Link>
  );
};
export default DropDownItem;
