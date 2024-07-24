import Image from 'next/image'
import React from 'react'

export default function DeveloperInformation() {
    return (
        <div className="mb-12 md:mb-20">
            <div className="container">
                <div className="flex flex-col gap-12 md:gap-20">
                    <div className="flex justify-between items-center flex-col md:flex-row">
                        <div className="flex items-center gap-4 flex-col md:flex-row">
                            <div className="rounded-xl overflow-hidden w-3/4 md:w-32">
                                <Image
                                    alt=""
                                    src={"/portfolio/about-info1.jfif"}
                                    width={300}
                                    height={300}
                                    className='object-cover aspect-square'
                                ></Image>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2>محمدرضا گودرزی</h2>
                                <span>Front developer</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Image
                                alt=""
                                src={"/icons/linkedin transparent 1.svg"}
                                width={77.57}
                                height={77.57}
                                className='w-14'
                            ></Image>
                            <Image
                                alt=""
                                src={"/icons/linkedin transparent.svg"}
                                width={77.57}
                                height={77.57}
                                className='w-14'
                            ></Image>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-sm/8">
                            سلام، من محمد گودرزی هستم ، متولد 1321/09/17 و دارای مدرک کارشناسی کامپیوتر از دانشگاه کالیفرنیا <br />
                            با توجه به علاقه شخصی در دوران کارشناسی به مبحث برنامه نویسی از سال دوم کارشناسی با سمت کارشناس برنامه نویسی  در لاول کد مشغول به کار شده و رفته رفته با دیجیتالی شدن بیشتر صنایع با ورود به حوزه E-Commerce در گروه اینترنتی ایران-گروه اسنپ (IIG) در سمت Key Account Manager  و بعد از گذشت 6 ماه با ترفیع رتبه با سمت Category Manager به توسعه کسب و کار صنایع تأمین کنندگان محصولات در این گروه اینترنتی پرداختم. در این مسیر با متدلوژی‌های مختلف مدیریت پروژه آشنا و به این حوزه علاقه‌مند شده و با ورود به شرکت مهندسی مشاور پیشرو مدیریت پیران (که به صورت تخصصی در آموزش و مشاوره مدیریت پروژه فعالیت می‌کند) در سال 1396 سعی در پیش بُرد این علاقه‌مندی داشتم. در این شرکت با توسعه دپارتمان آموزش موفق به کسب سمت مدیر آکادمی PMPiran شدم و همکاری‌های مشترکی با دانشگاه‌های مطرح ایران از جمله دانشگاه صنعتی امیرکبیر و شریف با همکاری تیم تشکیل شده رقم زدیم.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
