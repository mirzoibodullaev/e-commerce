import { Card } from "../../components/Card/Card";
import { product } from "../../data";
import "./BestSellingsSection.scss";

export const BestSellingsSection = () => {
    return (
        <section className="best-sellings">
            <div className="best-sellings__title">
                <div className="best-sellings__item"></div>
                <span>This Month</span>
            </div>
            <div className="best-sellings__top-content">
                <h2 className="best-sellings__heading">
                    Best Selling Products
                </h2>
                <button className="best-sellings__btn">View All</button>
            </div>
            <div className="best-sellings__products">
                {product
                    .filter((item) => item.bestSelling)
                    .map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
            </div>
        </section>
    );
};
