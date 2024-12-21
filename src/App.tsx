import { Header } from "./components/Header/Header";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <div className="top-header">
                <div className="top-header__content container">
                    <p className="top-header__title">
                        Summer Sale For All Swim Suits And Free Express Delivery
                        - OFF 50%!
                    </p>
                    <a className="top-header__link" href="#">
                        Shop Now
                    </a>
                    <select className="top-header__lang" name="lang" id="lang">
                        <option value="English">English</option>
                    </select>
                </div>
            </div>
            <Header />
            <hr />
            <Main />
            <Footer />
        </>
    );
}

export default App;
