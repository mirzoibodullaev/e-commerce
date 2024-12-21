import ViewIcon from "../../assets/icons/view.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import "./Card.scss";

interface CardProps {
    sale?: string;
    img: string;
    name: string;
    price: number;
    review: number;
    isNew?: boolean;
}

export const Card = ({ sale, img, name, price, review, isNew }: CardProps) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-icons">
                    <img className="card-icon" src={HeartIcon} alt="add" />
                    <img className="card-icon" src={ViewIcon} alt="view" />
                </div>
                {sale && <span className="card-sale">{sale}</span>}
                {isNew && <span className="card-new">New</span>}
                <img className="card-img" src={img} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <p className="card-price">${price}</p>
            <p className="card-rating">{review}</p>
        </div>
    );
};
