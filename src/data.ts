import { BrowseByCategory, Category, Product } from "./types";
import Chair from "./assets/chair.png";
import Gamepad from "./assets/gamepad.png";
import Keyboard from "./assets/keyboard.png";
import Monitor from "./assets/monitor.png";
import CategoryCamera from "./assets/icons/Category-Camera.svg";
import CategoryPhone from "./assets/icons/Category-CellPhone.svg";
import CategoryCopmuter from "./assets/icons/Category-Computer.svg";
import CategoryGamepad from "./assets/icons/Category-Gamepad.svg";
import CategoryHeadphone from "./assets/icons/Category-Headphone.svg";
import CategorySmartwatch from "./assets/icons/Category-SmartWatch.svg";
import Coat from "./assets/coat.png";
import BookSelf from "./assets/bookself.png";
import GucciBag from "./assets/gucci-bag.png";
import Cooler from "./assets/rgb-cooler.png";
import Car from "./assets/car.png";
import Cleats from "./assets/cleats.png";
import Curology from "./assets/curology.png";
import Canon from "./assets/canon.png";
import DogFood from "./assets/dogfood.png";
import Jacket from "./assets/jacket.png";
import UsbGamepad from "./assets/usbGamepad.png";
import Ideapad from "./assets/ideapad.png";

export const categoriesData: Category[] = [
    { name: "Woman's Fashion", hasDropDown: true },
    { name: "Men's Fashion", hasDropDown: true },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby's & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
];

export const product: Product[] = [
    {
        id: 1,
        sale: "-40%",
        img: Gamepad,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        review: 88,
        bestSelling: false,
    },
    {
        id: 2,
        sale: "-35%",
        img: Keyboard,
        name: "AK-900 Wired Keyboardr",
        price: 960,
        review: 75,
        bestSelling: false,
    },
    {
        id: 3,
        sale: "-30%",
        img: Monitor,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        review: 99,
        bestSelling: false,
    },
    {
        id: 4,
        sale: "-25%",
        img: Chair,
        name: "S-Series Comfort Chair",
        price: 375,
        review: 99,
        bestSelling: false,
    },
    {
        id: 5,
        sale: "-25%",
        img: Chair,
        name: "S-Series Comfort Chair",
        price: 375,
        review: 99,
        bestSelling: false,
    },
    {
        id: 6,
        img: Coat,
        name: "The north coat",
        price: 260,
        review: 65,
        bestSelling: true,
    },
    {
        id: 7,
        img: GucciBag,
        name: "Gucci duffle bag",
        price: 960,
        review: 65,
        bestSelling: true,
    },
    {
        id: 8,
        img: Cooler,
        name: "RGB liquid CPU Cooler",
        price: 160,
        review: 65,
        bestSelling: true,
    },
    {
        id: 9,
        img: BookSelf,
        name: "Small BookSelf",
        price: 360,
        review: 65,
        bestSelling: true,
    },
    {
        id: 10,
        img: DogFood,
        name: "Breed Dry Dog Food",
        price: 100,
        review: 35,
        bestSelling: false,
    },
    {
        id: 11,
        img: Canon,
        name: "CANON EOS DSLR Camera",
        price: 360,
        review: 95,
        bestSelling: false,
    },
    {
        id: 12,
        img: Ideapad,
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        review: 325,
        bestSelling: false,
    },
    {
        id: 13,
        img: Curology,
        name: "Curology Product Set",
        price: 560,
        review: 65,
        bestSelling: false,
    },
    {
        id: 14,
        img: Car,
        name: "Kids Electric Car",
        price: 960,
        review: 145,
        bestSelling: false,
        isNew: true,
    },
    {
        id: 15,
        img: Cleats,
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        review: 35,
        bestSelling: false,
    },
    {
        id: 16,
        img: UsbGamepad,
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        review: 55,
        bestSelling: false,
        isNew: true,
    },
    {
        id: 17,
        img: Jacket,
        name: "Quilted Satin Jacket",
        price: 660,
        review: 55,
        bestSelling: false,
    },
];

export const browseByCategoryData: BrowseByCategory[] = [
    { id: 1, name: "Phones", img: CategoryPhone },
    { id: 2, name: "Computers", img: CategoryCopmuter },
    { id: 3, name: "SmartWatch", img: CategorySmartwatch },
    { id: 4, name: "Camera", img: CategoryCamera },
    { id: 5, name: "HeadPhones", img: CategoryHeadphone },
    { id: 6, name: "Gaming", img: CategoryGamepad },
];
