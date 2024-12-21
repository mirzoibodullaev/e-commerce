import { HeroSection } from "../../sections/HeroSection";
import { BestSellingsSection } from "../../sections/BestSellingsSection";
import { CategorySection } from "../../sections/CategorySection";
import { SalesSection } from "../../sections/SalesSection";
import { LimitedOffersection } from "../../sections/LimitedOfferSection";
import { ProductsSection } from "../../sections/ProductsSection";
import AppleImg from "../../assets/apple-gray.png";
import IphoneImg from "../../assets/iphone-hero.png";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import "./Main.scss";
import { FeaturedSection } from "../../sections/FeaturedSection";

export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <HeroSection
                    appleImg={AppleImg}
                    iphoneImg={IphoneImg}
                    arrowRight={ArrowRight}
                />
                <SalesSection />
                <CategorySection />
                <BestSellingsSection />
                <LimitedOffersection />
                <ProductsSection />
                <FeaturedSection />
            </div>
        </main>
    );
};
