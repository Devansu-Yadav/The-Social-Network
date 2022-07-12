import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faImage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const EditPostModal = ({ isOpenModal, closeModal, post }) => {
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

                    <div className="fixed inset-0 top-1/2 left-1/2  xs:w-[30rem] xxs:w-[95%] -translate-x-1/2 -translate-y-1/2">
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
                                <Dialog.Panel className="flex flex-col gap-y-3 relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900"
                                    >
                                        Edit Post
                                    </Dialog.Title>

                                    <button className='flex flex-row items-center justify-center absolute right-5 top-3 rounded-full border-2 border-transparent bg-white p-2 hover:bg-gray-200' onClick={closeModal}>
                                        <FontAwesomeIcon className='w-4' icon={faXmark} />
                                    </button>

                                    <form className='flex gap-y-3 h-full w-full flex-col items-start justify-between'>
                                        <div className='align-center flex w-full justify-between'>
                                            <div className="w-16 pt-3 mr-2">
                                                <img className="inline-block xs:w-14 xs:h-14 xxs:w-12 xxs:h-12 rounded-full" src={post.avatar} alt='The Social Network'/>
                                            </div>
                                            <textarea className="h-24 text-base text-black-400 font-normal w-full resize-none flex-wrap whitespace-normal break-words rounded-xl border-2 border-transparent px-3 focus:bg-gray-100 focus:outline-none xs:placeholder:text-base xxs:placeholder:text-sm" 
                                            rows={4} name="edit post" placeholder="What's on your mind?" value={post.content}></textarea>
                                        </div>

                                        { post.imageUrl !== "" && <div className='my-3 mx-3 flex w-1/2 justify-start'>
                                            <img src={post.imageUrl} alt="post media" className='mr-auto h-20 w-full rounded-md bg-white object-cover opacity-40' />
                                        </div> }

                                        <div className='relative mt-auto flex w-full flex-row items-center gap-4 '>
                                            <div className="flex items-center justify-center group rounded-full border-2 border-gray-100 bg-white p-3 hover:border-2 hover:border-tertiaryColor hover:outline-2">
                                                <label htmlFor="upload-picture" className="flex items-center justify-center text-gray-600">
                                                    <input type="file" id="upload-picture" accept="image/*" hidden/>
                                                    <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" id="" icon={faImage} />
                                                </label>
                                            </div>

                                            <button className="group rounded-full flex items-center justify-center text-gray-600 border-2 border-gray-100 bg-white p-3 hover:border-2 hover:border-tertiaryColor hover:outline-2 ">
                                                <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" icon={faFaceSmile} />
                                            </button>

                                            <button className="ml-auto flex items-center justify-center gap-3 rounded-xl bg-primaryColor px-2 py-2 font-semibold text-white hover:bg-primaryColor-dark">
                                                Update Post
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

export { EditPostModal };
