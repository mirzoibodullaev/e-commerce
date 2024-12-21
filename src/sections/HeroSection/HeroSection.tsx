
import { Sidebar } from "../../components/Sidebar";
import { categoriesData } from "../../data";
import "./HeroSection.scss";

interface HeroSectionProps {
    appleImg: string;
    iphoneImg: string;
    arrowRight: string;
}

export const HeroSection = ({
    appleImg,
    iphoneImg,
    arrowRight,
}: HeroSectionProps) => {
    return (
        <section className="hero">
            <div className="hero-categories">
                <Sidebar categories={categoriesData} />
            </div>
            <div className="hero-wrapper">
                <div className="hero-content">
                    <div className="hero-content__img">
                        <img src={appleImg} alt="apple" />
                        <span className="hero-content__title">
                            iPhone 14 Series
                        </span>
                    </div>
                    <h1 className="hero-content__heading">
                        Up to 10% off Voucher
                    </h1>
                    <a className="hero-content__link" href="#">
                        Shop Now
                        <img className="arrow-right" src={arrowRight} alt="" />
                    </a>
                </div>
                <img src={iphoneImg} alt="Iphone" className="hero-img" />
            </div>
        </section>
    );
};
