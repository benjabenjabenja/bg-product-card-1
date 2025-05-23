import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):React.ReactElement,
    Buttons: ( Props: ProductButtonsProps ) => React.ReactElement,
    Image:   ( Props: ProductImageProps ) => React.ReactElement,
    Title:   ( Props: ProductTitleProps ) => React.ReactElement,
}


export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number
}


export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}