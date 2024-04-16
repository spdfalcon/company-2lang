import React from "react";
import Ads from "./Ads";
import Navbar from "./Navbar";

export default function Topbar() {
  return (
    <>
      <div className="">
        <Ads></Ads>
        <Navbar></Navbar>
        <div className="w-full h-screen bg-red-800"></div>
      </div>
    </>
  );
}
