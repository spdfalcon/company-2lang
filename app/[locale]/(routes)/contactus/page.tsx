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
                            <h3 className='text-4xl font-bold font-cinema'>
                                با پر کردن فرم زیر با ما در تماس باش
                            </h3>
                            <span className='text-white/80 text-sm'>
                                نظر و پیشنهاداتت رو حتما باهامون در میون بزار :)
                            </span>
                        </div>
                        <div className="w-[500px] p-4 rounded-2xl bg-second_dark grid-cols-2 gap-4 grid">
                            <input type="text" className='p-3 rounded-lg bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='نام و نام خانوادگی' />
                            <input type="text" className='p-3 rounded-lg bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='شماره تماس' />
                            <textarea
                                className='p-3 aspect-[5/3] resize-none col-span-2 rounded-lg bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='متن پیام'
                            ></textarea>
                            <button className='p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 col-span-2 text-white font-bold outline-none text-xs'>
                                ثبت درخواست
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
