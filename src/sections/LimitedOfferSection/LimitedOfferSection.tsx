import JBL from "../../assets/JBL.png";
import "./LimitedOfferSection.scss";

export const LimitedOffersection = () => {
    return (
        <section className="limited-offer-section">
            <div className="limited-offer-section__content">
                <h4 className="limited-offer-section__title">Categories</h4>
                <p className="limited-offer-section__paragraph">
                    Enhance Your <br /> Music Experience
                </p>
                <div className="limited-offer-section__time">
                    <div className="limited-offer-section__date">
                        <span className="limited-offer-section__num">23</span>
                        <span className="limited-offer-section__text">
                            Hours
                        </span>
                    </div>
                    <div className="limited-offer-section__date">
                        <span className="limited-offer-section__num">05</span>
                        <span className="limited-offer-section__text">
                            Days
                        </span>
                    </div>
                    <div className="limited-offer-section__date">
                        <span className="limited-offer-section__num">59</span>
                        <span className="limited-offer-section__text">
                            Minutes
                        </span>
                    </div>
                    <div className="limited-offer-section__date">
                        <span className="limited-offer-section__num">35</span>
                        <span className="limited-offer-section__text">
                            Seconds
                        </span>
                    </div>
                </div>
                <button className="limited-offer-section__btn">Buy now</button>
            </div>
            <div className="limited-offer-section__img">
                <img src={JBL} alt="JBL" />
            </div>
        </section>
    );
};
