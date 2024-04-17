import { Metadata } from "next";
import AddOrder from "../_components/templates/home/AddOrder";

export default function Home() {
  return (
    <>
    <div>
      <AddOrder></AddOrder>
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
