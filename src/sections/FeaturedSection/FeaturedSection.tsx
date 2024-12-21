import "./FeaturedSection.scss";
import PS5 from "../../assets/PS5.png";
import Woman from "../../assets/woman.png";
import Speakers from "../../assets/speakers.png";
import Perfumes from "../../assets/perfumes.png";
import Delivery from "../../assets/icons/delivery.svg";
import Customer from "../../assets/icons/customer.svg";
import Guarantee from "../../assets/icons/guarantee.svg";

export const FeaturedSection = () => {
    return (
        <section className="featured">
            <div className="featured__title">
                <div className="featured__item"></div>
                <span>Featured</span>
            </div>
            <h2 className="featured__heading">New Arrival</h2>
            <div className="featured-content">
                <div className="featured-content__game">
                    <img src={PS5} alt="playstation" />
                    <h4 className="game-title">PlayStation 5</h4>
                    <p className="game-paragraph">
                        Black and White version of the PS5 <br /> coming out on
                        sale.
                    </p>
                </div>
                <div className="featured-content__woman">
                    <img src={Woman} alt="Woman" />
                    <h4 className="woman-title">Women’s Collections</h4>
                    <p className="woman-paragraph">
                        Featured woman collections that <br /> give you another
                        vibe.
                    </p>
                </div>
                <div className="featured-content__speakers">
                    <img src={Speakers} alt="Speakers" />
                    <h4 className="speakers-title">Speakers</h4>
                    <p className="speakers-paragraph">
                        Amazon wireless speakers
                    </p>
                </div>
                <div className="featured-content__perfume">
                    <img src={Perfumes} alt="perfume" />
                    <h4 className="perfume-title">Perfume</h4>
                    <p className="perfume-paragraph">GUCCI INTENSE OUD EDP</p>
                </div>
            </div>
            <div className="services">
                <div className="services-delivery">
                    <img
                        className="services-icon"
                        src={Delivery}
                        alt="Delivery"
                    />
                    <h5 className="services-title">FREE AND FAST DELIVERY</h5>
                    <p className="services-paragraph">
                        Free delivery for all orders over $140
                    </p>
                </div>
                <div className="services-customer">
                    <img
                        className="services-icon"
                        src={Customer}
                        alt="Customer"
                    />
                    <h5 className="services-title">24/7 CUSTOMER SERVICE</h5>
                    <p className="services-paragraph">
                        Friendly 24/7 customer support
                    </p>
                </div>
                <div className="services-guarantee">
                    <img
                        className="services-icon"
                        src={Guarantee}
                        alt="Guarantee"
                    />
                    <h5 className="services-title">MONEY BACK GUARANTEE</h5>
                    <p className="services-paragraph">
                        {" "}
                        We reurn money within 30 days
                    </p>
                </div>
            </div>
        </section>
    );
};
