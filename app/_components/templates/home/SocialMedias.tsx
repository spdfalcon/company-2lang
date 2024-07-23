import React from "react";
import SocialMedia from "../../modules/SocialMedia";

export default function SocialMedias() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-10 ">
      <SocialMedia
        bg="bg-gradient-to-r from-[#E825D4] to-[#F87919]"
        iconmd="/home/socialmedia/instagramsm.png"
        iconsm="/home/socialmedia/instagrammd.png"
        title="لاول کد را در اینستاگرام دنبال کنید. "
      ></SocialMedia>
      <SocialMedia
        bg="bg-gradient-to-r from-[#00A0C5] to-[#00D2FC]"
        iconmd="/home/socialmedia/telegramsm.png"
        iconsm="/home/socialmedia/telegrammd.png"
        title="لاول کد را در تلگرام دنبال کنید. "
      ></SocialMedia>
    </div>
  );
}
