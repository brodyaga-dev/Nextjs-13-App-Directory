"use client";
import { TabItem } from "components/TabItem";
import {
  ProductPageId,
  useProductPageContext,
} from "context/productPage/pageContext";
import React from "react";
import { EyeIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";

interface IProps {
  className?: string;
}
const ProductBar = ({ className }: IProps) => {
  const { selectedPage } = useProductPageContext();
  return (
    <div
      className={` backdrop-blur gap-2 bg-gradient-to-b shadow  z-10 from-white/25 to-sky-300/25 mx-1 rounded-md ${className}`}
    >
      <TabItem
        isSelected={selectedPage === ProductPageId.NEW}
        href="/products/new"
      >
        <PlusIcon className="w-4" />
      </TabItem>
      <TabItem
        isSelected={selectedPage === ProductPageId.EDIT}
        href="/products/edit"
      >
        <PencilIcon className="w-4" />
      </TabItem>
      <TabItem
        isSelected={selectedPage === ProductPageId.SEE}
        href="/products/see"
      >
        <EyeIcon className="w-4" />
      </TabItem>
    </div>
  );
};

export default ProductBar;
