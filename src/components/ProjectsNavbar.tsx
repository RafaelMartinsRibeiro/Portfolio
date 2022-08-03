import { FunctionComponent } from "react";
import { Category } from "../../type";

const NavItem: FunctionComponent<{
  value: "All" | Category;
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  return (
    <li
      onClick={() => handlerFilterCategory(value)}
      className={`${
        active === value
          ? "text-purple-600"
          : "cursor-pointer hover:text-purple-600"
      }`}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="NextJS" {...props} />
      <NavItem value="JavaScript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
