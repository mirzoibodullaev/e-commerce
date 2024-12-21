export type Category = {
    name: string;
    hasDropDown?: boolean;
};

export type Product = {
    id: number;
    sale?: string;
    img: string;
    name: string;
    price: number;
    review: number;
    bestSelling: boolean;
    isNew?: boolean;
};

export type BrowseByCategory = {
    id: number;
    name: string;
    img: string;
};
