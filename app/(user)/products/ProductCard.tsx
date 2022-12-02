import { Product } from "interfaces";
import Image from "next/image";
import React from "react";

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className="shadow rounded-md hover:shadow-md cursor-pointer overflow-hidden p-4">
      <Image
        src={props.product.imageUrl}
        width={300}
        height={200}
        alt={props.product.name}
      />
      <h6 className="text-center text-slate-600 p-2">{props.product.name}</h6>
      <p className="text-center text-emerald-500 p-2">{props.product.price}</p>
    </div>
  );
};

export default ProductCard;
