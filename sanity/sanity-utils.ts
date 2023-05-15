import { Banner, PageType, ProductType } from "@/lib/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProducts(): Promise<ProductType[]> {
  const query = groq`*[_type == "product"]{
    _id,
    _createdAt,
    name,
    price,
    details,
    "slug": slug.current,
    "image": image[].asset->url
  }`;
  return createClient(clientConfig).fetch(query, {
    next: { revalidate: 3600 },
  });
}

export async function getProduct(slug: string): Promise<ProductType> {
  const query = groq`*[_type == "product" && slug.current == '${slug}'][0]{
    _id,
    _createdAt,
    name,
    price,
    details,
    "slug": slug.current,
    "image": image[].asset->url
  }`;
  return createClient(clientConfig).fetch(query);
}

export async function getBanners(): Promise<Banner[]> {
  const query = groq`*[_type == "banner"]`;
  return createClient(clientConfig).fetch(query);
}

export async function getPages(): Promise<PageType[]> {
  const query = groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current
  }`;
  return createClient(clientConfig).fetch(query, {
    next: { revalidate: 3600 },
  });
}

export async function getPage(slug: string): Promise<PageType> {
  const query = groq`*[_type == "page" && slug.current == '${slug}'][0]`;
  return createClient(clientConfig).fetch(query);
}