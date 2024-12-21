import DropDown from "../../assets/icons/DropDown.svg";
import { Category } from "../../types";
import "./Sidebar.scss";

type SidebarProps = {
    categories: Category[];
};

export const Sidebar = ({ categories }: SidebarProps) => {
    return (
        <aside className="sidebar">
            {categories.map(({ name, hasDropDown }) => (
                <li key={name} className="sidebar-item">
                    <a className="sidebar-item__link" href="#">
                        {name}
                    </a>
                    {hasDropDown && <img src={DropDown} alt="" />}
                </li>
            ))}
        </aside>
    );
};
