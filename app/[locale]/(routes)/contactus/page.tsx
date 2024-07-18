import SocialMedias from '@/app/_components/templates/home/SocialMedias'
import React from 'react'

export default function page() {
    return (
        <div className='mt-16'>
            <div className="container">
                <div className="flex flex-col gap-20">
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
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <h3 className='text-xl md:text-4xl font-bold font-cinema'>
                                با پر کردن فرم زیر با ما در تماس باش
                            </h3>
                            <span className='text-white/80 text-xs md:text-sm'>
                                نظر و پیشنهاداتت رو حتما باهامون در میون بزار :)
                            </span>
                        </div>
                        <div className="w-full md:w-[500px] p-4 rounded-2xl bg-second_dark grid-cols-2 gap-4 grid">
                            <input type="text" className='p-3 rounded-lg col-span-2 md:col-span-1 bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='نام و نام خانوادگی' />
                            <input type="text" className='p-3 rounded-lg col-span-2 md:col-span-1 bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='شماره تماس' />
                            <textarea
                                className='p-3 aspect-[5/3] resize-none col-span-2 rounded-lg bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='متن پیام'
                            ></textarea>
                            <button className='p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 col-span-2 text-white font-bold outline-none text-xs'>
                                ثبت درخواست
                            </button>
                        </div>
                    </div>
                    <div className="bg-second_dark rounded-lg p-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                                <div className="flex gap-1 items-center text-xs lg:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        تایم کاری
                                    </span>
                                </div>
                                <p className='text-xs'>
                                    ساعات کاری از ۱۲ ظهر الی ۲۴ شب
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                                <div className="flex gap-1 items-center text-xs lg:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                    </svg>
                                    <span>
                                        ایمیل
                                    </span>
                                </div>
                                <p className='text-xs'>
                                    mail.lovelcode@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                                <div className="flex gap-1 items-center text-xs lg:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        شماره پشتیبان واتساپ
                                    </span>
                                </div>
                                <p className='text-xs'>
                                    00909090909
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                                <div className="flex gap-1 items-center text-xs lg:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <span>
                                        آدرس شرکت
                                    </span>
                                </div>
                                <p className='text-xs'>
                                    -----
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <SocialMedias></SocialMedias>
                    </div>
                </div>
            </div>
        </div>
    )
}
