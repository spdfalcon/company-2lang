import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Topbar from "../_components/templates/topbar/Topbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import localFont from "next/font/local";
import Footer from "../_components/templates/home/Footer/Footer";
const yekanbakh = localFont({
  src: [
    {
      path: "../_fonts/fonts/woff/YekanBakh-Thin.woff",
      weight: "100",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-Light.woff",
      weight: "300",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-Regular.woff",
      weight: "400",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-Bold.woff",
      weight: "700",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "../_fonts/fonts/woff/YekanBakh-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-yekanbakh",
  weight: "400",
});
const cinema = localFont({
  src: "../_fonts/fonts/Cinema.ttf",
  variable: "--font-cinema",
});
export const metadata: Metadata = {
  title: "LovelCode/لاول کد",
  description: "Generated by create next app",
  icons: "/icons/icon.svg",
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
  const messages = useMessages();
  return (
    <html
      dir={locale === "fa" ? "rtl" : locale === "en" ? "ltr" : "rtl"}
      className=""
      lang={locale}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={`${cinema.variable} ${yekanbakh.variable} bg-background text-white font-yekanbakh`}
        >
          <div className="">
            <Topbar></Topbar>
            <div className="">{children}</div>
          </div>
          <div className="">
          <Footer></Footer>
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
