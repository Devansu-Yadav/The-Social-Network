import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditPostModal } from "components";

const PostOptionsMenu = ({ post }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const closeModal = () => {
        setIsOpenModal(false);
    }

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
                                            } group flex w-full items-center text-gray-600 rounded-md px-2 py-2 text-base`}
                                        onClick={() => setIsOpenModal(true)}>
                                        <FontAwesomeIcon
                                            className="mr-2 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4"
                                            aria-hidden="true"
                                            icon={faPenToSquare}
                                        />
                                        Edit Post
                                    </button>
                                )}
                            </Menu.Item>
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
                                        Delete Post
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            { isOpenModal && (
                <EditPostModal isOpenModal={isOpenModal} closeModal={closeModal} post={post} />
            )}
        </div>
    );
};

export { PostOptionsMenu };