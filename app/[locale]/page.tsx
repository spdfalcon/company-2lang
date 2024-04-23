import { Metadata } from "next";
import AddOrder from "../_components/templates/home/AddOrder";
import BgBlur from "../_components/templates/home/BgBlur";
import Plans from "../_components/templates/home/Plans/Plans";

export default function Home() {
  return (
    <>
    <div className="">
      <AddOrder></AddOrder>
      <Plans></Plans>
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
