import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "@/components/Product";
import Image from "next/image";
import {
  getProduct,
  getProducts,
  urlForImage,
} from "../../../../sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

const ProductDetails = async ({ params: { slug } }: Props) => {
  const products = await getProducts();
  const product = await getProduct(slug);
  const imageProps = urlForImage(product?.image && product.image[0]);
  
  let index = 0;
  const setIndex = (newValue: React.Key) => {
    index = newValue as number;
  };

  const qty = 0;

   
  return (
    <div>
      <div className="product-detail-container">
        <div className="md:w-[30%]">
          <div className="image-container">
            <Image
              src={
                imageProps
                  ? imageProps.url()
                  : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt="image"
              width={600}
              height={600}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {product.image?.map((item: any, i: React.Key | null | undefined) => (
              <Image
                key={i}
                src={
                  urlForImage(product?.image && product.image[i as number])
                    ? urlForImage(product.image[i as number]).url()
                    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                }
                alt="image"
                width={600}
                height={600}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc md:w-[70%] ">
          <h1>{product.name}</h1>
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
          <p>{product.details}</p>
          <p className="price">${product.price}</p>
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
            {products.map((item: { _id: React.Key | null | undefined }) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product: ProductType) => ({
//     params: {
//       slug: product.slug.current,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };
