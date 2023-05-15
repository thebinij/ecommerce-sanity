"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageViewProps {
  images: string[];
}
export default function ImageView({ images }: ImageViewProps) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="image-container">
        <Image
          src={
            images
              ? images[index]
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt="image"
          width={600}
          height={600}
          className="product-detail-image"
        />
      </div>
      <div className="small-images-container">
        {images?.map((item: any, i: React.Key | null | undefined) => (
          <Image
            key={i}
            src={
              images
                ? images[i as number]
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="image"
            width={600}
            height={600}
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
            onMouseEnter={() => setIndex(i as number)}
          />
        ))}
      </div>
    </>
  );
}
