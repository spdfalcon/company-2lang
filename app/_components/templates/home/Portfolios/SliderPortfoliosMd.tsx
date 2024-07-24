import React from "react";
import Portfolio from "./Portfolio";
const SliderPortfoliosMd = () => {
  return (
    <div className=" mt-9 hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:gap-y-10">
      <Portfolio></Portfolio>
      <Portfolio></Portfolio>
      <Portfolio></Portfolio>
      <Portfolio></Portfolio>
      <Portfolio></Portfolio>
      <Portfolio></Portfolio>
    </div>
  );
};

export default SliderPortfoliosMd;
