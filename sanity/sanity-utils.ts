import { Banner, ProductType } from "@/lib/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import createImageUrlBuilder from "@sanity/image-url";
const { projectId, dataset } = clientConfig;

export const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (
  source: Parameters<(typeof imageBuilder)["image"]>[0]
) => imageBuilder.image(source).auto("format").fit("max");

export async function getProducts(): Promise<ProductType[]> {
  const query = groq`*[_type == "product"]`;
  return createClient(clientConfig).fetch(query, {
    next: { revalidate: 3600 },
  });
}

export async function getProduct(slug: string): Promise<ProductType> {
  const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
  return createClient(clientConfig).fetch(query, {
    next: { revalidate: 3600 },
  });
}

export async function getBanners(): Promise<Banner[]> {
  const query = groq`*[_type == "banner"]`;
  return createClient(clientConfig).fetch(query, {
    next: { revalidate: 3600 },
  });
}
