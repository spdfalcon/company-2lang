import Image from 'next/image'
import React from 'react'

export default function CompanyInformation() {
    return (
        <div className="mb-12 md:mb-20">
            <div className="container">
                <div className="md:bg-main_dark rounded-2xl md:p-4 grid grid-cols-5 gap-10">
                    <div className="col-span-5 md:col-span-3 flex flex-col gap-2 md:gap-4 order-1 md:-order-1">
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
                    <div className="col-span-5 md:col-span-2 md:bg-background rounded-xl flex flex-col items-center justify-center gap-4">
                        <Image
                            alt=""
                            src={"/logo/logo.svg"}
                            width={65.52}
                            height={43.71}
                            className="w-16 md:w-40"
                        ></Image>
                        <Image
                            alt=""
                            src={"/logo/logotype.svg"}
                            width={65.52}
                            height={43.71}
                            className="w-20 md:w-44"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
