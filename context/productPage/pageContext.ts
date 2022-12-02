import { createContext, useContext } from "react";

export enum ProductPageId {
  NONE = 0,
  NEW,
  EDIT,
  SEE,
}

interface IProductPageContext {
  selectedPage: ProductPageId;
  setSelectedPage: (pageId: ProductPageId) => void;
}

export const ProductPageContext = createContext<IProductPageContext>({
  selectedPage: ProductPageId.NONE,
  setSelectedPage: (pageId) => {},
});

export const useProductPageContext = () => useContext(ProductPageContext);
