import React from "react";
import Player from "./Player";
import Btn from "../../modules/Btn/Btn";
import Titles from "../../modules/Titles";
export default function AddOrder() {
  return (
    <div className="px-5 mt-11">
      <Titles desc="weareatthesideofsettingupyourvirtualbusiness" title="professionaldigitalagencymarketing"></Titles>
      <div className="mid">
        <Player></Player>
      </div>
      <div className="w-full down flex justify-center mt-5">
        <div className="md:hidden text-xs">
          <Btn
            bg="gradient"
            type="box7"
            href={"/"}
            title={'placeanorderforwebsitedesign'}
          ></Btn>
        </div>
        <div className="hidden md:flex text-[18px] shadow-btn">
          <Btn
            bg="gradient"
            type="box2"
            href={"/"}
            title={'placeanorderforwebsitedesign'}
          ></Btn>
        </div>
      </div>
    </div>
  );
}
