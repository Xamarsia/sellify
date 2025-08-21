import Button from "@sellify/common-ui-components/buttons/Button";
import ProductPreviewImage from "./ProductPreviewImage";
import { useCallback } from "react";

type Props = {
    productPreview: ProductPreview;
    onProductAddedToCart: (productId: number) => void;
};

export default function ProductPreview({ productPreview, onProductAddedToCart }: Props) {

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
        onProductAddedToCart(productPreview.productId);
    }, [onProductAddedToCart]);

    return (
        <div className="flex flex-row md:flex-col body gap-4 md:gap-0 justify-between wrap-anywhere not-md:border-b border-stroke not-md:py-4 ">
            <div className="flex not-md:basis-64 ">
                <ProductPreviewImage src={productPreview.image} hoveredSrc={productPreview.hoveredImage} />
            </div>
            <div className="flex not-md:basis-128 flex-col justify-between ">
                <div className="mx-2 flex flex-col gap-4 h-24 justify-between shrink-0 md:my-4">
                    {/* TODO add link to Product page */}
                    <a href="/">
                        <h4 className="not-md:text-justify line-clamp-2 break-all hover:underline underline-offset-3">{productPreview.title}</h4>
                    </a>
                    <p>${productPreview.price}</p>
                </div>
                <Button variant="outline" size="small" onClick={handleClick} fill="parent" >
                    <p>Add to Cart</p>
                </Button>
            </div>
        </div>
    );
}
