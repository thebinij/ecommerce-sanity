export interface Image {
  _type: string,
  _key: string,
    asset: {
      _ref: string;
      _type: string;
    }
  }
export interface ProductType{
    _id: string;
    image: Image[];
    slug:{current:string}
    name: string;
    details: string;
    price: number;
  };

  export interface Banner {
    image: string;
    smallText: string;
    midText: string;
    largeText1: string;
    product: string;
    buttonText: string;
    desc: string;
  }
