import { browseByCategoryData } from "../../data";
import "./CategorySection.scss";

export const CategorySection = () => {
    return (
        <section className="category">
            <div className="category-section__title">
                <div className="category-section__item"></div>
                <span>Categories</span>
            </div>
            <h2 className="category-section__heading">Browse By Category</h2>
            <div className="category-items">
                {browseByCategoryData.map((item) => (
                    <div className="category-items__content" key={item.id}>
                        <img
                            className="category-items__img"
                            src={item.img}
                            alt={item.name}
                        />
                        <span className="category-items__name">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
            <hr />
        </section>
    );
};
