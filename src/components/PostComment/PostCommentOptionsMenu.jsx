import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";

const PostCommentOptionsMenu = () => {
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div className="rounded-full border-transparent hover:bg-gray-200">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent px-3 py-3 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon icon={faEllipsis} />
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
                                    <button
                                        className={`${active ? 'bg-gray-200' : ''
                                            } text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-2 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4"
                                            aria-hidden="true"
                                            icon={faTrash}
                                        />
                                        Delete Comment
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

export { PostCommentOptionsMenu };