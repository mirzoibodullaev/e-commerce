import "./Search.scss";
import SearchIcon from "../../assets/icons/search.svg";

export const Search = () => {
    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="What are you looking for?"
            />
            <img className="search-icon" src={SearchIcon} alt="search" />
        </div>
    );
};
