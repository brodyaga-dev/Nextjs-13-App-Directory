"use client";
import ProductBar from "components/ProductBar";
import ProductContextProvider from "context/productPage/ProductContextProvider";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ProductsLayout = ({ children }: IProps) => {
  return (
    <ProductContextProvider>
      <div className="grid grid-cols-12 mt-1">
        <ProductBar className="col-span-2" />
        <div className="col-span-10">{children}</div>
      </div>
    </ProductContextProvider>
  );
};
