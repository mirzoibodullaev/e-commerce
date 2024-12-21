import { Card } from "../../components/Card/Card";
import { product } from "../../data";
import "./ProductsSection.scss";

export const ProductsSection = () => {
    return (
        <section className="products-section">
            <div className="products-section__title">
                <div className="products-section__item"></div>
                <span>Our Products</span>
            </div>
            <h2 className="products-section__heading">Explore Our Products</h2>
            <div className="products-section__product">
                {product
                    .filter((item) => item.id > 9)
                    .map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
            </div>
            <button className="products-section__btn">View All Products</button>
        </section>
    );
};
