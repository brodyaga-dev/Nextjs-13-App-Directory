import React, { ReactNode } from "react";
import "styles/globals.css";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <div className="bg-violet-100 text-emerald-400 p-2">Admin Panel</div>
      {children}
    </div>
  );
};

export default layout;
