import SelectLang from "@/app/_components/templates/topbar/SelectLang";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function AboutUs() {
    const t = useTranslations("menu");
    return (
        <div className="mt-16">
            <div className="container">
                <div className="flex flex-col gap-12 lg:gap-20">
                    <div className="rounded-md p-3 flex items-center gap-2 bg-second_dark text-badge w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span className='text-xs'>
                            مقالات
                        </span>
                    </div>
                    <div className="bg-main_dark rounded-2xl p-4 grid grid-cols-5 gap-10">
                        <div className="col-span-3 flex flex-col gap-4">
                            <h4 className="font-bold">
                                لاول کد در یک نگاه
                            </h4>
                            <p className="text-sm/8">
                                لاول کد در سال 1403 ساخته شد!
                                طی فعالیت در حوزه­ بازاریابی و برندینگ با افراد و کسب و کارهای کوچک و متوسط زیادی برخورد داشتیم که به دریافت مشاوره و راهکار جهت توسعه و بهبود بیزینس خود نیاز داشتند، پاسخگویی به این نیاز در حوزه ی بازاریابی و برندینگ منجر به شکل گیری لاول کد شد. <br />
                                با در نظر گرفتن دغدغه ­های معمول در کسب و کارهای ایران، تصمیم گرفتیم که دانش، تخصص و تجربه خودمون رو توی بازاریابی، بازاریابی دیجیتال، برندینگ و … را با برندهایی که به دنبال ارتقا جایگاه خودشون هستند، کسب و کارهایی که به فکر بهبود و توسعه هستند و افرادی که به دنبال دانش به روز در این حوزه هستند، به اشتراک بگذاریم و مخاطبارو توی زمینه اجرا، مشاوره و آموزش بازاریابی و برندینگ همراهی کنیم. به گونه ای که انجام اینکار هم برای خودمان خوشحال کننده و رضایت بخش باشه و هم بوتنیم مشتریارو  خوشحال و راضی کنیم و همچنین نتیجه کار به گونه ای باشه که مصرف کننده نهایی مشتری  رضایت کامل رو داشته باشه. <br />
                                این اتفاقات باعث شد که ما نام لاول کد (LovelCode) یعنی دوست داشتنی را انتخاب کنیم.  بازاریابی دوست داشتنی ، در واقع به دنبال ارائه خدماتیه که از نقطه نظر علم بازاریابی حرفه ای و تاثیرگذار باشه و از طریق توسعه و پیشرفت کسب و کار منجر به خشنودی مشتریان ختم به خیر بشه :)
                            </p>
                        </div>
                        <div className="col-span-2 bg-background rounded-xl flex flex-col items-center justify-center gap-4">
                            <Image
                                alt=""
                                src={"/logo/logo.svg"}
                                width={65.52}
                                height={43.71}
                                className="w-40"
                            ></Image>
                            <Image
                                alt=""
                                src={"/logo/logotype.svg"}
                                width={65.52}
                                height={43.71}
                                className="w-44"
                            ></Image>
                        </div>
                    </div>
                    <div className="flex items-center gap-10">
                        <Image
                            alt=""
                            src={"/logo/team.png"}
                            width={400}
                            height={43.71}
                            className="shrink-0"
                        ></Image>
                        <div className="flex flex-col gap-4">
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
        </div>
    );
}
