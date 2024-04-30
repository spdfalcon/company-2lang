import { Metadata } from "next";
import AddOrder from "../_components/templates/home/AddOrder";
import BgBlur from "../_components/templates/home/BgBlur";
import Plans from "../_components/templates/home/Plans/Plans";
import Brief from "../_components/templates/home/Brief/Brief";
import BriefMd from "../_components/templates/home/Brief/BriefMd";
import Portfolios from "../_components/templates/home/Portfolios/Portfolios";
import SocialMedias from "../_components/templates/home/SocialMedias";

export default function Home() {
  return (
    <>
      <div className="">
        <AddOrder></AddOrder>
        <Plans></Plans>
        <div className="md:hidden">
          <Brief></Brief>
        </div>
        <div className="hidden md:flex">
          <BriefMd></BriefMd>
        </div>
        <div>
          <Portfolios></Portfolios>
        </div>
        <div className="">
          <SocialMedias></SocialMedias>
        </div>
      </div>
      <BgBlur></BgBlur>
    </>
  );
}

export const metadata: Metadata = {
  title: "LovelCode/لاول کد",
  description: "طراحی سایت شخصی , طراحی سایت فروشگاهی , طراحی سایت ",
  icons: "/icons/icon.svg",
  keywords: "طراحی سایت , ساخت سایت , طراحی سایت شخصی , طرای سایت فروشگاهی",
};
