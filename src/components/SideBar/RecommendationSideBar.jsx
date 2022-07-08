import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react'

const RecommendationSideBar = () => {
    return (
        <aside className="lg:block sm:hidden xs:hidden xxs:hidden h-screen p-2.5 sticky top-0 border-l border-slate-200">
            <div className="w-full text-right mt-20">
                <Menu as="div" className="inline-block text-left">
                    <Transition
                        as={Fragment}
                        show={true}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items static className="mt-2 w-full rounded-2xl origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="flex flex-col shrink-0 m-0 items-stretch pl-4 pr-4 pt-3 pb-3 justify-between">
                                            <h2 className="flex flex-row shrink-0 m-0 p-0 items-stretch text-xl text-gray-600 font-bold">Who to follow</h2>
                                        </div>
                                    )}
                                </Menu.Item>
                            </div>
                            
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                            
                                            <div className="mr-2">
                                                <img className="inline-block h-12 w-12 rounded-full" src="https://devansuyadav.live/assets/Devansu_Yadav.jpg" alt="User avatar" />
                                            </div>
                                            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                                                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                                                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Johnrao D</span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">@johnrao.doekar</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                                        <button className={`outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 ${ active ? "bg-whiteColor text-primaryColor": "bg-primaryColor text-whiteColor"}`}>
                                                            Follow
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                            
                                            <div className="mr-2">
                                                <img className="inline-block h-12 w-12 rounded-full" src="https://devansuyadav.live/assets/Devansu_Yadav.jpg" alt="User avatar" />
                                            </div>
                                            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                                                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                                                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Johnrao D</span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">@johnrao.doekar</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                                        <button className={`outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 ${ active ? "bg-whiteColor text-primaryColor": "bg-primaryColor text-whiteColor"}`}>
                                                            Follow
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                            
                                            <div className="mr-2">
                                                <img className="inline-block h-12 w-12 rounded-full" src="https://devansuyadav.live/assets/Devansu_Yadav.jpg" alt="User avatar" />
                                            </div>
                                            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                                                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                                                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Johnrao D</span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">@johnrao.doekar</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                                        <button className={`outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 ${ active ? "bg-whiteColor text-primaryColor": "bg-primaryColor text-whiteColor"}`}>
                                                            Follow
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                            
                                            <div className="mr-2">
                                                <img className="inline-block h-12 w-12 rounded-full" src="https://devansuyadav.live/assets/Devansu_Yadav.jpg" alt="User avatar" />
                                            </div>
                                            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                                                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                                                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Johnrao D</span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">@johnrao.doekar</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                                        <button className={`outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 ${ active ? "bg-whiteColor text-primaryColor": "bg-primaryColor text-whiteColor"}`}>
                                                            Follow
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                            
                                            <div className="mr-2">
                                                <img className="inline-block h-12 w-12 rounded-full" src="https://devansuyadav.live/assets/Devansu_Yadav.jpg" alt="User avatar" />
                                            </div>
                                            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                                                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                                                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                                                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Johnrao D</span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">@johnrao.doekar</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                                        <button className={`outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 ${ active ? "bg-whiteColor text-primaryColor": "bg-primaryColor text-whiteColor"}`}>
                                                            Follow
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>
                            </div>

                            <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/peers" className="flex flex-col shrink-0 m-0 items-stretch pl-4 pr-4 pt-3 pb-3 justify-between">
                                            <div className="flex flex-row shrink-0 m-0 p-0 items-stretch text-xl text-primaryColor font-bold">
                                                <div className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">Show More</div>
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </aside>
    );
}

export { RecommendationSideBar };