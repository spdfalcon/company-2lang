import Image from 'next/image'
import React from 'react'

export default function CompanyStory() {
    return (
        <div className="mb-12 md:mb-20">
            <div className="container">
                <div className="flex items-center gap-10 flex-col md:flex-row">
                    <Image
                        alt=""
                        src={"/logo/team.png"}
                        width={400}
                        height={43.71}
                        className="shrink-0"
                    ></Image>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h4 className="font-bold">
                            قصه اینجوری شد که فکر کردیم میتونیم دنیا رو عوض کنیم...
                        </h4>
                        <p className="text-sm/8">
                            آره خنده داره...ولی از چندتا جوون معتاد چه انتظاری دارید :) ما اعتیاد داشتیم به موفقیت، رویاهامون شدن انگیزه حرکت و راهنمایی داریم به اسم خلاقیت، از کمال طلبی انرژی گرفتیم و تجربه ها موفق قبلی مسیرمون رو روشن کرد. پس هم مسیر شدیم و دنبال همسفر میگردیم، مشتریانی همراه تا قله و همفکر، فکری از جنس پیشرفت
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
