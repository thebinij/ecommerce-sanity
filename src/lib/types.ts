import {PortableTextBlock} from 'sanity'
export interface Image {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
export interface ProductType {
  _id: string;
  _createdAt:string;
  _updatedAt:string;
  image: Image[];
  name: string;
  slug: { current: string, _type: string };
  price: number;
  details: string;
}

export interface PageType {
  _id: string;
  _createdAt:string;
  title: string;
  slug: { current: string, _type: string }
  content : PortableTextBlock[];
}

export interface Banner {
  image: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2:string;
  discount:string;
  saleTime:string
  product: string;
  buttonText: string;
  desc: string;
}

export interface ImageProps {
  loader: Function;
  src: string;
  width: number;
  height: number;
}