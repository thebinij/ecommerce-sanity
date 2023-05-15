import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../sanity/sanity-utils";

const Product = ({ product: { image, name, slug, price } }: any) => {
  const imageProps =   urlForImage(image && image[0]);
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={
              imageProps
                ? imageProps.url()
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="image"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
