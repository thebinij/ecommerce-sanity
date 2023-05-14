import { createClient } from "next-sanity";
import { useNextSanityImage } from 'next-sanity-image';
import { Image } from "./types";
export interface ImageProps {
  loader: Function;
  src: string;
  width: number;
  height: number;
}
export const client = createClient({
    projectId: "djjgyefp",
    dataset: "production",
    apiVersion: "2023-05-14",
    useCdn: false
  });


export const GetImageProps = (image:Image) => useNextSanityImage(client,image) as ImageProps | null;

