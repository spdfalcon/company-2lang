import PortfolioFilter from "@/app/_components/modules/porfolio/PortfolioFilter";
import React from "react";

export default function page() {
  return (
    <div className="mt-[100px] ">
      <div>
        <div className="header px-5 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-cinema">نمونه کارهای طراحی سایت</h1>
          <p className="text-sm ">
            نمونه کار طراحی سایت های فروشگاهی، خبری و طراحی سایت آموزشی و ... را
            که در توی این صفحه مشاهده می کنی همه پروژه های اجرا شده کسب و کارهای
            آنلاینی اند که درحال کار هستند.{" "}
          </p>
        </div>
        <div className="filter">
          <PortfolioFilter></PortfolioFilter>
        </div>
      </div>
    </div>
  );
}
