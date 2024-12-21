import "./Navbar.scss"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-items">
                <li className="navbar-items__list">
                    <a className="navbar-items__link active" href="">
                        Home
                    </a>
                </li>
                <li className="navbar-items__list">
                    <a className="navbar-items__link" href="">
                        Contact
                    </a>
                </li>
                <li className="navbar-items__list">
                    <a className="navbar-items__link" href="">
                        About
                    </a>
                </li>
                <li className="navbar-items__list">
                    <a className="navbar-items__link" href="">
                        Sign Up
                    </a>
                </li>
            </ul>
        </nav>
    );
};
