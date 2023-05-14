import { Key } from "react";
import { client } from "../lib/client";
import Product from "@/app/components/Product";
import { Banner, ProductType } from "@/lib/types";

const Home = async() => {
  const {products } = await fetchData()
  return (
    <main>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> */}

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


 const fetchData= async () => {
  const query = '*[_type == "product"]';
  const products: ProductType[] = await client.fetch(query,{ next: { revalidate: 3600 } });

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: Banner[] = await client.fetch(bannerQuery,{ next: { revalidate: 5000 } });

  return {products, bannerData }
  ;
};


export default Home;
