import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "@/app/components/Product";
import { client } from "@/lib/client";
import Image from "next/image";
import { ProductType } from "@/lib/types";

const ProductDetails = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { products, product } = await fetchProducts(slug);
  const { image, name, details, price } = product;
  const qty = 0;

  return (
    <div>
      <div className="product-detail-container">
        <div className="sm:w-[30%]">
          <div className="image-container">
            <Image
              src={
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt="image"
              width={600}
              height={600}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {/* {image?.map((item: any, i: string | number | ((prevState: number) => number) | null | undefined) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))} */}
            <Image
              src={
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt="image"
              width={100}
              height={100}
              className="small-image selected-image"
            />
            <Image
              src={
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt="image"
              width={100}
              height={100}
              className="small-image"
            />
          </div>
        </div>

        <div className="product-detail-desc sm:w-[70%] ">
          <h1>{name}</h1>
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
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex justify-center items-center">
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

      <div className="maylike-products-wrapper mb-10">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item: { _id: React.Key | null | undefined }) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: ProductType) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const fetchProducts = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query, { next: { revalidate: 3600 } });
  const products = await client.fetch(productsQuery, {
    next: { revalidate: 3600 },
  });

  return {
    products,
    product,
  };
};

export default ProductDetails;
