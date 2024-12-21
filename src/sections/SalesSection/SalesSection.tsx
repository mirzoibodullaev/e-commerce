import { Card } from "../../components/Card/Card";
import { DateTime } from "../../components/Date/DateTime";
import { product } from "../../data";
import "./SalesSection.scss";

export const SalesSection = () => {
    const targetDate = new Date("2024-12-31T23:59:59");
    return (
        <section className="sales">
            <div className="sales-title">
                <div className="sales-rectangle"></div>
                <span>Today`s</span>
            </div>
            <div className="sales-time">
                <h2 className="sales-heading">Flash Sales</h2>
                <DateTime targetDate={targetDate} />
            </div>
            <div className="card-items">
                {product.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
            <button className="sales-view__button">View All Products</button>
            <hr />
        </section>
    );
};
