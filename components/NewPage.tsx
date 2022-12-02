"use client";

import {
  ProductPageId,
  useProductPageContext,
} from "context/productPage/pageContext";
import React, { useEffect } from "react";

const NewPageComp = () => {
  const { setSelectedPage } = useProductPageContext();
  useEffect(() => {
    setSelectedPage(ProductPageId.NEW);
  }, []);
  return <div>NewPage2222</div>;
};

export default NewPageComp;
