import "./Footer.scss";
import Qrcode from "../../assets/qrcode.png";
import GooglePlay from "../../assets/icons/googleplay.svg";
import AppStore from "../../assets/icons/appstore.svg";
import Linkedin from "../../assets/icons/Icon-Linkedin.svg";
import Twitter from "../../assets/icons/Icon-Twitter.svg";
import Instagram from "../../assets/icons/icon-instagram.svg";
import Facabook from "../../assets/icons/Icon-Facebook.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-order">
                    <div className="footer-logo">Exclusive</div>
                    <div className="footer-subscribe">Subscribe</div>
                    <p className="footer-paragraph">
                        Get 10% off your first order
                    </p>
                    <div className="footer-email__input">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer-email__input-field"
                        />
                        <button className="footer-email__input-button">
                            ➤
                        </button>
                    </div>
                </div>
                <div className="footer-support">
                    <a className="footer-support__title">Support</a>
                    <p className="footer-support__address">
                        111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                    </p>
                    <a
                        className="footer-support__email"
                        href="mailto:exclusive@gmail.com"
                    >
                        exclusive@gmail.com
                    </a>
                    <a
                        className="footer-support__phone"
                        href="tel:88015888889999"
                    >
                        +88015-88888-9999
                    </a>
                </div>
                <div className="footer-account">
                    <a className="footer-account__link" href="#">
                        My Account
                    </a>
                    <a className="footer-account__link" href="#">
                        Login / Register
                    </a>
                    <a className="footer-account__link" href="#">
                        Cart
                    </a>
                    <a className="footer-account__link" href="#">
                        Wishlist
                    </a>
                    <a className="footer-account__link" href="#">
                        Shop
                    </a>
                </div>
                <div className="footer-quicklink">
                    <a className="footer-quicklink__link" href="#">
                        Privacy Policy
                    </a>
                    <a className="footer-quicklink__link" href="#">
                        Terms Of Use
                    </a>
                    <a className="footer-quicklink__link" href="#">
                        FAQ
                    </a>
                    <a className="footer-quicklink__link" href="#">
                        Contact
                    </a>
                </div>
                <div className="footer-app">
                    <a className="footer-app__link" href="">
                        Download App
                    </a>
                    <p className="footer-app__offer">
                        Save $3 with App New User Only
                    </p>
                    <div className="footer-app__download">
                        <img
                            className="footer-app__qrcode"
                            src={Qrcode}
                            alt="QrCode"
                        />
                        <div className="footer-app__apps">
                            <img
                                className="footer-app__gplay"
                                src={GooglePlay}
                                alt="GooglePlay"
                            />
                            <img
                                className="footer-app__astore"
                                src={AppStore}
                                alt="AppSotre"
                            />
                        </div>
                    </div>
                    <div className="footer-icons">
                        <img src={Facabook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
