import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Articles() {
    return (
        <div className='mt-16'>
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
                    <div className="flex flex-col gap-5 lg:gap-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                    8 تیر
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Link href={''}>
                                        <Image
                                            src={'/articles/3.png'}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                        />
                                    </Link>
                                </div>
                                <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                    <h1 className='text-sm lg:text-lg font-bold'>
                                        <Link href={''}>
                                            شکایت صرافی کوین بیس(Coinbase) از SEC!
                                        </Link>
                                    </h1>
                                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span>
                                            علیرضا رضایی
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                                8 تیر
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <Link href={''}>
                                    <Image
                                        src={'/articles/3.png'}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                            <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                                <h1 className='text-sm lg:text-lg font-bold'>
                                    <Link href={''}>
                                        شکایت صرافی کوین بیس(Coinbase) از SEC!
                                    </Link>
                                </h1>
                                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span>
                                        علیرضا رضایی
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
