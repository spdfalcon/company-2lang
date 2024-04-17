import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Topbar from "../_components/templates/topbar/Topbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LovelCode/لاول کد",
  description: "Generated by create next app",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html
      dir={locale === "fa" ? "rtl" : locale === "en" ? "ltr" : "rtl"}
      className=""
      lang={locale}
    >
      <body className={`${inter.className} bg-background text-white`}>
        <div className="font-yekanbakh">
          <Topbar></Topbar>
          <div className="">{children}</div>
        </div>
      </body>
      
    </html>
  );
}
