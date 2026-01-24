import React from "react";
type props = {
  children: React.ReactNode;
};
const Container = ({ children }: props) => {
  return <div className="px-4 md:px-8 lg:px-16 mx-auto">{children}</div>;
};

export default Container;
