import ProductBar from "components/ProductBar";
import ProductContextProvider from "context/productPage/ProductContextProvider";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ProductDefualtLayout = ({ children }: IProps) => {
  return (
    <div className="grid grid-cols-12 mt-1">
      <ProductContextProvider>
        <ProductBar className="col-span-2" />
        <div className="col-span-10">{children}</div>
      </ProductContextProvider>
    </div>
  );
};

export default ProductDefualtLayout;
