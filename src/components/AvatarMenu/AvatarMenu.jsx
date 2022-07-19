import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { defaultUserData } from "common/constants";

const AvatarMenu = () => {
    const { userData } = useSelector((state) => state.auth);

    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent xs:px-2 xxs:px-2 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <img className="inline-block lg:h-14 lg:w-14 md:h-14 md:w-14 sm:h-14 sm:w-14 xs:w-12 xs:h-12 xxs:w-10 xxs:h-10 rounded-full" src={userData?.avatar || defaultUserData.avatar} alt="User avatar" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                        to="/profile">
                                        <FontAwesomeIcon
                                            className="mr-2 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4"
                                            aria-hidden="true"
                                            icon={faUser}
                                        />
                                        Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primaryColor text-white' : 'text-gray-600'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-2 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4"
                                            aria-hidden="true"
                                            icon={faArrowRightFromBracket}
                                        />
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export { AvatarMenu };
