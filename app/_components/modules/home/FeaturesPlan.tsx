import { FeaturesPlanProps } from "@/app/_types/types";
import Image from "next/image";
import React from "react";

const FeaturesPlan:React.FC<FeaturesPlanProps> = ({
  count,
  title,
  src,
  width,
  height,
  text
}: any)=> {
  const arr = new Array(count).fill(0);
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-xs md:text-sm">{title}</span>
        <div className="flex gap-1">
          {arr.map((item) => (
            <>
            {
                src ? (
                    <Image
                      key={item.index}
                      alt=""
                      src={src}
                      width={width}
                      height={height}
                    ></Image>
                ) : (
                    <span>{text}</span>
                )
            }
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesPlan