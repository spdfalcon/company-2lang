import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-6 w-full mt-6 flex justify-between items-center px-5">
      <div className="">
        <img src="/navbar/hamber.svg" alt="" />
      </div>
      <div>
        <img src="/navbar/icon.png" alt="" />
      </div>
      <div className="rounded-full size-10 bg-white/10 flex justify-center items-center">
        <div className="rounded-full size-7 bg-background flex justify-center items-center">
        <img src="/navbar/user.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
