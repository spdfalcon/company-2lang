import React from 'react'

export default function ContactDetail() {
    return (
        <div className="mb-12 md:mb-20">
            <div className="container">
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
            </div>
        </div>
    )
}
