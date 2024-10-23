
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  title: string;
}

export const SideBarItem = ({ to, title }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` p-2 rounded-lg transition duration-300 ease-in-out ${
          isActive ? "bg-zinc-600" : "hover:bg-zinc-500"
        }`
      }
    >
      {title}
    </NavLink>
  );
};
