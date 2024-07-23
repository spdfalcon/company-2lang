import React from 'react'

export default function ContactForm() {
    return (
        <div className="mb-12 md:mb-20">
            <div className="container">
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h3 className='text-xl md:text-4xl font-bold font-cinema'>
                            با پر کردن فرم زیر با ما در تماس باش
                        </h3>
                        <span className='text-white/80 text-xs md:text-sm'>
                            نظر و پیشنهاداتت رو حتما باهامون در میون بزار :)
                        </span>
                    </div>
                    <div className="w-full md:w-[500px] p-4 rounded-2xl md:bg-second_dark grid-cols-2 gap-4 grid">
                        <input type="text" className='p-3 rounded-lg col-span-2 md:col-span-1 bg-second_dark md:bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='نام و نام خانوادگی' />
                        <input type="text" className='p-3 rounded-lg col-span-2 md:col-span-1 bg-second_dark md:bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='شماره تماس' />
                        <textarea
                            className='p-3 aspect-[5/3] resize-none col-span-2 rounded-lg bg-second_dark md:bg-background text-white/80 outline-none placeholder:text-white/60 text-xs' placeholder='متن پیام'
                        ></textarea>
                        <button className='p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 col-span-2 text-white font-bold outline-none text-xs'>
                            ثبت درخواست
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
