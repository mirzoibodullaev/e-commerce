import { Navbar } from "../Navbar/Navbar";
import { Search } from "../Search/Search";
import CartIcon from "../../assets/icons/cart.svg";
import WishlistIcon from "../../assets/icons/Wishlist.svg";
import "./Header.scss";

export const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="header-logo">Eclusive</div>
                <Navbar />
                <div className="header-content">
                    <Search />
                    <div className="header-icons">
                        <img
                            className="wishlist"
                            src={WishlistIcon}
                            alt="Wishlist"
                        />
                        <img className="cart" src={CartIcon} alt="Cart" />
                    </div>
                </div>
            </header>
        </div>
    );
};
