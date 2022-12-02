"use client";
import React, { ReactNode, useState } from "react";
import { ProductPageContext, ProductPageId } from "./pageContext";

interface IProps {
  children: ReactNode;
}
const ProductContextProvider = (props: IProps) => {
  const [selectedPage, setSelectedPage] = useState<ProductPageId>(
    ProductPageId.NONE,
  );
  return (
    <ProductPageContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
      }}
    >
      {props.children}
    </ProductPageContext.Provider>
  );
};

export default ProductContextProvider;
