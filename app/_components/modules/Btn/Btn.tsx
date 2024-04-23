import { ButtonProps } from "@/app/_types/types";
import Link from "next/link";
import React from "react";

const Btn: React.FC<ButtonProps> = ({ title, bg, type, href }) => {
  return (
    <div
      className={`${
        bg === "gradient"
          ? "gradient-orange"
          : bg === "background"
          ? "bg-background"
          : ""
      } ${
        type === "box1"
          ? "rounded-[18px] w-[170px] h-[65px] relative after:block after:absolute after:size-[42px] after:bg-background after:rounded-full after:-top-6"
          : type === "box2"
          ? "w-[253px] h-[68px] rounded-[20px]"
          : type === "box3"
          ? "w-[255px] h-[55px] rounded-[16px]"
          : type === "box4"
          ? "w-[188px] h-[55px] rounded-[16px]"
          : type === "box5"
          ? "w-[360px] h-[55px] rounded-[16px]"
          : type === "box6"
          ? "w-[233px] h-[50px] rounded-[14px]"
          : type === "box7"
          ? "w-[320px] h-[50px] rounded-[14px]"
          : type === "box8"
          ? "w-[244px] h-[50px] rounded-[14px]"
          : ""
      } flex justify-center items-center`}
    >
      <Link href={href} className="text-center">
        {title}
      </Link>
    </div>
  );
};

export default Btn;
