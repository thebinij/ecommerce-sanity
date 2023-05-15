import { Key } from "react";
import Product from "@/components/Product";
import HeroBanner from "@/components/HeroBanner";
import { getBanners, getProducts } from "../../sanity/sanity-utils";

const Home = async() => {
  const products = await getProducts()
  const banner = await getBanners()
  return (
    <main>
      <HeroBanner heroBanner={banner.length && banner[0]}  />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>thangka. There are many variations passages</p>
      </div>
      <div className="products-container">
        {products.map((product: { _id: Key | null | undefined }) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    </main>
  );
};



export default Home;
