import { Metadata } from "next";
import AddOrder from "../_components/templates/home/AddOrder";
import BgBlur from "../_components/templates/home/BgBlur";

export default function Home() {
  return (
    <>
    <div className="">
      <AddOrder></AddOrder>
      <h1>mohammad3</h1>
    </div>
    <div className="hidden md:block">
    <BgBlur></BgBlur>
    </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "LovelCode/لاول کد",
  description: "طراحی سایت شخصی , طراحی سایت فروشگاهی , طراحی سایت ",
  icons: "/icons/icon.svg",
  keywords: "طراحی سایت , ساخت سایت , طراحی سایت شخصی , طرای سایت فروشگاهی",
};
