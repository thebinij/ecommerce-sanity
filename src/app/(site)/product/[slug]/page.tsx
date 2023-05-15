import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "@/components/Product";
import { getProduct, getProducts } from "../../../../../sanity/sanity-utils";
import ImageView from "@/components/ImageView";

type Props = {
  params: { slug: string };
};

const ProductDetails = async ({ params: { slug } }: Props) => {
  const products = await getProducts();
  const product = await getProduct(slug);
  const qty = 0;
  return (
    <div>
      <div className="product-detail-container">
        <div className="md:w-[30%]">
          <ImageView images={product.image} />
        </div>

        <div className="product-detail-desc md:w-[70%] ">
          <h1>{product?.name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{product?.details}</p>
          <p className="price">${product?.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="flex items-center justify-center quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10 maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
