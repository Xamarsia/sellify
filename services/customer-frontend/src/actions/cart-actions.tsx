import image from "./../../resources/1/image.jpg";
import image2 from "./../../resources/1/image2.jpg";

import image3 from "./../../resources/2/image.jpg";
import image4 from "./../../resources/2/image2.jpg";

import image5 from "./../../resources/3/image.jpg";
import image6 from "./../../resources/3/image2.jpg";

const productPreview: ProductPreview = {
    image: image.src,
    hoveredImage: image2.src,
    price: 443,
    productId: 5447,
    title: "Product Title",
};

const productPreview2: ProductPreview = {
    image: image3.src,
    hoveredImage: image4.src,
    price: 443,
    productId: 5447,
    title:
        "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
};

const productPreview3: ProductPreview = {
    image: image5.src,
    hoveredImage: image6.src,
    price: 443,
    productId: 5447,
    title:
        "LongUnbreakableProductTitleWord|LongUnbreakableProductTitleWordLongUnbreakableProductTitleWord",
};

const cartItem: CartItem = {
    amount: 1,
    product: productPreview2,
};


// TODO  make it React Action 
export function getCartItems(): Array<CartItem> {
    const cartItems: Array<CartItem> = [cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem, cartItem];
    return cartItems;
}

export function getProductPreviews(): Array<ProductPreview> {
    const previews: Array<ProductPreview> = [
        productPreview,
        productPreview2,
        productPreview3,
        productPreview,
        productPreview2,
        productPreview3,
        productPreview,
        productPreview2,
        productPreview3,
        productPreview,
        productPreview2,
        productPreview3,
        productPreview,
        productPreview2,
        productPreview3,
        productPreview,
        productPreview2,
        productPreview3,
    ];
    return previews;
}
