"use client"

import { IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
    return (
        <div className="w-full mx-auto px-5 py-10 -700 mb-10">
            <div className="text-center max-w-[100vh] mx-auto">
                <h1 className="text-xl md:text-6xl font-bold mb-5">Upgrade to <span className="text-6xl text-green-700">Mindanao Property Pro</span> today!</h1>
                <h3 className="text-xl font-medium mb-10">Introducing our premium subscription plan for the ultimate real estate experience! With our subscription, you gain exclusive access to a wide range of powerful features designed to supercharge your property ventures.</h3>
            </div>
            <div className="w-full md:flex mb-5 p-7 rounded">

                <div className="w-full md:w-1/4 md:max-w-none bg-white dark:bg-gray-700 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4">Free</h2>
                        <h3 className="text-center font-bold text-4xl mb-2">₱0<span className="text-lg">/month</span></h3>
                        <p className="text-center font-bold mb-5">
                            <a href="#FAQ" className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                        </p>
                        <ul className="text-sm px-5 mb-8">
                            <li className="leading-tight py-2">
                                Listings per Month 
                                <span className="text-base pl-3">
                                    3 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Inquiries per Month
                                <span className="text-base pl-3">
                                    3
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full items-center justify-center">
                            <p className="text-green-700 text-center ">
                            Your Current Subscription
                            </p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 md:max-w-none bg-white dark:bg-gray-700 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4">Lite</h2>
                        <h3 className="text-center font-bold text-3xl md:text-4xl mb-2">₱450<span className="text-lg">/month</span></h3>
                        <p className="text-center font-bold mb-5">
                            <a href="#FAQ" className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                        </p>
                        <ul className="text-sm px-5 mb-8">
                            <li className="leading-tight py-2">
                                Listings per Month
                                <span className="text-base pl-3">
                                    10 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Inquiries per Month
                                <span className="text-base pl-3">
                                    20
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Lead Credits per Month
                                <span className="text-base pl-3">
                                    10 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Access to Leads 
                                <span className="text-base pl-3">
                                ₱40K 
                                </span>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                SMS notification
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <IconCheck 
                                        width={15} height={15}
                                    />
                                </div>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                Auto Responder
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <IconCheck 
                                        width={15} height={15}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <Button className="w-full">Upgrade</Button>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:max-w-none bg-white dark:bg-gray-700 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4">Advanced</h2>
                        <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">₱950<span className="text-lg">/month</span></h3>
                        <p className="text-center font-bold mb-5">
                            <a href="#FAQ" className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                        </p>
                        <ul className="text-sm px-5 mb-8">
                            <li className="leading-tight py-2">
                                Listings per Month
                                <span className="text-base pl-3">
                                    25 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Inquiries per Month
                                <span className="text-base pl-3">
                                    Unlimited
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Lead Credits per Month
                                <span className="text-base pl-3">
                                    20 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Access to Leads 
                                <span className="text-base pl-3">
                                ₱60K 
                                </span>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                SMS notification
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        className="icon icon-tabler icon-tabler-check min-w-5" 
                                        width="15" height="15" 
                                        viewBox="0 0 24 24" 
                                        stroke-width="2" 
                                        stroke="currentColor" 
                                        fill="none" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round">
                                        <path stroke="none"d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                </div>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                Auto Responder
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <IconCheck 
                                        width={15} height={15}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <Button className="w-full">Upgrade</Button>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:max-w-none bg-white dark:bg-gray-700 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                    <div className="w-full flex-grow">
                        <h2 className="text-center text-3xl font-bold uppercase mb-2">Specialist</h2>
                        <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">₱950<span className="text-lg">/month</span></h3>
                        <p className="text-center font-bold mb-5">
                            <a href="#FAQ" className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                        </p>
                        <ul className="text-sm px-5 mb-8">
                            <li className="leading-tight py-2">
                                Listings per Month
                                <span className="text-base pl-3">
                                    30 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Inquiries per Month
                                <span className="text-base pl-3">
                                    Unilited
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Lead Credits per Month
                                <span className="text-base pl-3">
                                    30 
                                </span>
                            </li>
                            <li className="leading-tight py-2">
                                Access to Leads 
                                <span className="text-base pl-3">
                                ₱80K 
                                </span>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                SMS notification
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <IconCheck 
                                        width={15} height={15}
                                    />
                                </div>
                            </li>
                            <li className="leading-tight py-2 flex items-center">
                                Auto Responder
                                <div className="bg-green-200 rounded-full p-1 fill-current text-green-700 ml-4">
                                    <IconCheck 
                                        width={15} height={15}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <Button className="w-full">Upgrade</Button>
                    </div>
                </div>
            </div>
            <div className="text-center max-w-xl mx-auto">
                <p className="text-xs leading-tight py-2">With our subscription, you'll have all the tools and resources necessary to elevate your real estate business to new heights. Join us today and experience the immense benefits of our premium features.</p>
            </div>
        </div>
    );
}

export default Pricing;