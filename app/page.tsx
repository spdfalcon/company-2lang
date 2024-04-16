import { Metadata } from "next";
import Navbar from "./_components/templates/Navbar";
import UseLang from "./_hooks/UseLang/UseLang";

export default function Home() {

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <UseLang></UseLang>
    </>
  );
}

export const metadata: Metadata = {
  title: "LovelCode/لاول کد",
  description: "طراحی سایت شخصی , طراحی سایت فروشگاهی , طراحی سایت ",
  icons: "/icons/icon.svg",
  keywords: "طراحی سایت , ساخت سایت , طراحی سایت شخصی , طرای سایت فروشگاهی",
};
