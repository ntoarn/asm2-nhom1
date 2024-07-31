export interface IProduct {
    _id?: string;
    title?: string;
    price?: number;
    description?: string;
    quantity?:number
    image?: string;
    categoryId?: Category;
}

export interface Category {
    _id?: string;
    name?: string;
    slug?: string;
}