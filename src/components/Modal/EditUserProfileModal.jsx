import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faImage, faCamera } from "@fortawesome/free-solid-svg-icons";
import { defaultUserData } from "common/constants";

const EditUserProfileModal = ({ isOpenModal, closeModal, user }) => {
    return (
        <>
            <Transition appear show={isOpenModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 top-0 left-1/2 sm:w-[30rem] xxs:w-[95%] -translate-x-1/2">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex flex-col relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-4 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="sm:text-2xl xxs:text-xl font-medium leading-6 text-gray-900"
                                    >
                                        Edit Profile
                                    </Dialog.Title>

                                    <button className='flex flex-row items-center justify-center absolute right-5 top-3 rounded-full border-2 border-transparent bg-white p-2 hover:bg-gray-200' onClick={closeModal}>
                                        <FontAwesomeIcon className='w-4' icon={faXmark} />
                                    </button>

                                    <form className='flex gap-y-2 h-full w-full flex-col justify-between'>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="flex flex-col mr-2 relative">
                                                <img className="inline-block sm:w-24 sm:h-24 xxs:w-16 xxs:h-16 rounded-full" src={user.avatar} alt='User Avatar'/>
                                                <div className='absolute flex flex-row items-center justify-center rounded-full w-full h-full'>
                                                    <label htmlFor='upload-profile-pic' className='block cursor-pointer text-white p-1 rounded-full opacity-75 backdrop-blur-sm bg-[#1C252E]/[0.75] hover:bg-[#353B40]/[0.75]'>
                                                        <FontAwesomeIcon className='w-6' icon={faCamera} />
                                                    </label>
                                                    <input type="file" accept="image/*" id='upload-profile-pic' className='hidden' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full flex flex-row items-center justify-center gap-x-2 text-gray-500'>
                                            <label htmlFor='upload-coverImg' className='flex flex-row items-center justify-center gap-x-2 px-4 py-1 rounded-xl border border-solid border-gray-200 hover:bg-gray-200'>
                                                <FontAwesomeIcon icon={faImage} />
                                                <div className='text-base'>Upload cover image</div>
                                            </label>
                                            <input type="file" accept="image/*" id='upload-coverImg' className='hidden' />
                                        </div>

                                        <div className='w-full text-gray-500'>
                                            <label htmlFor='firstName' className='ml-2 mb-1 block text-base font-semibold'>
                                                First Name
                                            </label>
                                            <input type="text" name="firstName" id='firstName' className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' value={user.firstName} />
                                        </div>

                                        <div className='w-full text-gray-500'>
                                            <label htmlFor='lastName' className='ml-2 mb-1 block text-base font-semibold'>
                                                Last Name
                                            </label>
                                            <input type="text" name="lastName" id='lastName' className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' value={user.lastName} />
                                        </div>

                                        <div className='w-full text-gray-500'>
                                            <label htmlFor='bio' className='ml-2 mb-1 block text-base font-semibold'>
                                                Bio
                                            </label>
                                            <textarea id='bio' className="sm:text-base xxs:text-sm font-normal w-full resize-none flex-wrap whitespace-normal break-words rounded-xl border border-solid border-gray-200 py-2 px-4 focus:bg-gray-100 focus:outline-none focus:border-primaryColor" 
                                            name="edit bio" value={user.bio || defaultUserData.bio}></textarea>
                                        </div>

                                        <div className='w-full text-gray-500'>
                                            <label htmlFor='portfolio' className='ml-2 mb-1 block text-base font-semibold'>
                                                Portfolio
                                            </label>
                                            <input type="url" name="portfolio" id='portfolio' className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' value={user.website} />
                                        </div>

                                        <div className='relative flex w-full flex-row items-center justify-end gap-4'>
                                            <button className="flex items-center justify-center gap-3 rounded-xl bg-white border border-solid border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-500 hover:text-white">
                                                Cancel
                                            </button>

                                            <button className="flex items-center justify-center gap-3 rounded-xl bg-primaryColor px-4 py-2 font-semibold text-white hover:bg-primaryColor-dark">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export { EditUserProfileModal };
