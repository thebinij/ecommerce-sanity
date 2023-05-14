import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageProps } from "@/lib/client";

const HeroBanner = ({
  heroBanner: {
    image,
    smallText,
    midText,
    largeText1,
    product,
    buttonText,
    desc,
  },
}: any) => {
    const imageProps = getImageProps(image && image[0]);
    console.log(image)
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        {/* <div style={{ maxWidth: '100%', height: 'auto' }}>
        <Image
          src={
            imageProps
              ? "imageProps.src"
              : "https://cdn.sanity.io/images/djjgyefp/production/bbe69c7b31d3721ac2dcda06ea9f54d81cdb20e0-1171x781.jpg"
          }
          alt="image"
          width={600} 
          height={200} 
          className="hero-banner-image"
        />
          </div> */}
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
