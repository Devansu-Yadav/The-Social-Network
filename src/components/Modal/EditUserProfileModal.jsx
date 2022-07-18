import { Dialog, Transition } from '@headlessui/react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextError } from "components";
import { updateUser, uploadAvatar, uploadCoverImg } from "common/services";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faImage, faCamera } from "@fortawesome/free-solid-svg-icons";
import { defaultUserData, CDN_UPLOAD_PRESET, CDN_API_KEY } from "common/constants";
import { toast } from 'react-toastify';

const EditUserProfileModal = ({ isOpenModal, closeModal, user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authToken } = useSelector((state) => state.auth);
    const userAvatar = user.avatar || defaultUserData.avatar;

    const [userAvatarPreview, setUserAvatarPreview] = useState(userAvatar);
    
    const initialValues = {
        userName: user?.userName,
        firstName: user?.firstName,
        lastName: user?.lastName,
        bio: user?.bio || defaultUserData.bio,
        website: user?.website || "",
        avatar: userAvatarPreview,
        coverImg: user?.coverImg || defaultUserData.coverImg,
    };

    const [userCoverImgPreview, setCoverImgPreview] = useState(initialValues.coverImg);

    const validationScheme = Yup.object({
        userName: Yup.string().required("Please select a username").min(8, "Username is too short, minimum 8 characters required").max(15, "Username is too long, max 8 characters allowed"),
        firstName: Yup.string().required("FirstName field can't be empty"),
        lastName: Yup.string().required("LastName field can't be empty"),
        bio: Yup.string().required("Bio can't be empty"),
        website: Yup.string()
          .url("Please enter a valid website")
          .required("Website cannot be empty")
          .matches(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
          "Invalid Url!"),
    });

    const onSubmit = async (values) => {
        const { userName, firstName, lastName, bio, website } = values;
        const updatedUserData = {
            userName,
            firstName,
            lastName,
            bio,
            website,
            avatar: userAvatarPreview,
            coverImg: userCoverImgPreview
        };

        const userData = await updateUser(authToken, updatedUserData, dispatch);
        console.log("Updated user data", userData);
        if(userData) {
            closeModal();
        }
    };

    const handleAvatar = async (file) => {
        if(file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CDN_UPLOAD_PRESET);
            formData.append("public_id", authToken);
            formData.append("api_key", CDN_API_KEY);

            const uploadedAvatarUrl = await uploadAvatar(formData);

            if(uploadedAvatarUrl) {
                setUserAvatarPreview(uploadedAvatarUrl);
            }
        }
    };

    const handleCover = async (file) => {
        if(file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CDN_UPLOAD_PRESET);
            formData.append("public_id", authToken + "-cover");
            formData.append("api_key", CDN_API_KEY);

            const uploadedCoverImgUrl = await uploadCoverImg(formData);

            if(uploadedCoverImgUrl) {
                toast.success("Uploaded Cover Image!");
                setCoverImgPreview(uploadedCoverImgUrl);
            }
        }
    };

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

                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationScheme}
                                        onSubmit={onSubmit} 
                                        >
                                            {(formik) => {
                                                return (
                                                    <Form className='flex gap-y-2 h-full w-full flex-col justify-between'>
                                                        <div className='flex items-center justify-center w-full'>
                                                            <div className="flex flex-col mr-2 relative">
                                                                <img className="inline-block sm:w-24 sm:h-24 xxs:w-16 xxs:h-16 rounded-full" src={userAvatarPreview} alt='User Avatar'/>
                                                                <div className='absolute flex flex-row items-center justify-center rounded-full w-full h-full'>
                                                                    <label htmlFor='upload-profile-pic' className='block cursor-pointer text-white p-1 rounded-full opacity-75 backdrop-blur-sm bg-[#1C252E]/[0.75] hover:bg-[#353B40]/[0.75]'>
                                                                        <FontAwesomeIcon className='w-6' icon={faCamera} />
                                                                    </label>
                                                                    <input 
                                                                        type="file" 
                                                                        name="avatar" 
                                                                        accept="image/*" 
                                                                        id='upload-profile-pic' 
                                                                        className='hidden'
                                                                        onChange={(e) => {
                                                                            handleAvatar(e.target.files[0]);
                                                                        }} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='w-full flex flex-row items-center justify-center gap-x-2 text-gray-500'>
                                                            <label htmlFor='upload-coverImg' className='flex flex-row items-center justify-center gap-x-2 px-4 py-1 rounded-xl border border-solid border-gray-200 hover:bg-gray-200'>
                                                                <FontAwesomeIcon icon={faImage} />
                                                                <div className='text-base'>Upload cover image</div>
                                                            </label>
                                                            <input 
                                                                type="file" 
                                                                name="coverImg" 
                                                                accept="image/*" 
                                                                id='upload-coverImg' 
                                                                className='hidden'
                                                                onChange={(e) => {
                                                                    console.log(e.target.files);
                                                                    handleCover(e.target.files[0]);
                                                                }} />
                                                        </div>

                                                        <div className='w-full text-gray-500'>
                                                            <label htmlFor='userName' className='ml-2 mb-1 block text-base font-semibold'>
                                                                Username
                                                            </label>
                                                            <Field 
                                                                type="text" 
                                                                name="userName" 
                                                                id='userName' 
                                                                className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' 
                                                                placeholder={"@" + initialValues.userName} />

                                                            <div className='ml-2'>
                                                                <ErrorMessage name="userName" component={TextError} />
                                                            </div>    
                                                        </div>

                                                        <div className='flex flex-row gap-x-2'>
                                                            <div className='w-full text-gray-500'>
                                                                <label htmlFor='firstName' className='ml-2 mb-1 block text-base font-semibold'>
                                                                    First Name
                                                                </label>
                                                                <Field 
                                                                    type="text" 
                                                                    name="firstName" 
                                                                    id='firstName' 
                                                                    className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' 
                                                                    placeholder={initialValues.firstName} />
                                                                
                                                                <div className='ml-2'>
                                                                    <ErrorMessage name="firstName" component={TextError} />
                                                                </div>
                                                            </div>

                                                            <div className='w-full text-gray-500'>
                                                                <label htmlFor='lastName' className='ml-2 mb-1 block text-base font-semibold'>
                                                                    Last Name
                                                                </label>
                                                                <Field 
                                                                    type="text" 
                                                                    name="lastName" 
                                                                    id='lastName' 
                                                                    className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' 
                                                                    placeholder={initialValues.lastName} />
                                                                
                                                                <div className='ml-2'>
                                                                    <ErrorMessage name="lastName" component={TextError} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='w-full text-gray-500'>
                                                            <label htmlFor='bio' className='ml-2 mb-1 block text-base font-semibold'>
                                                                Bio
                                                            </label>

                                                            <Field name="bio">
                                                                {({field, form, meta}) => {
                                                                    return (
                                                                        <textarea 
                                                                            id='bio'
                                                                            className="sm:text-base xxs:text-sm font-normal w-full resize-none flex-wrap whitespace-normal break-words rounded-xl border border-solid border-gray-200 py-2 px-4 focus:bg-gray-100 focus:outline-none focus:border-primaryColor"  
                                                                            placeholder={initialValues.bio}
                                                                            
                                                                            onChange={field.onChange}>
                                                                        </textarea>
                                                                    );
                                                                }}
                                                            </Field>
                                                            
                                                            <div className='ml-2'>
                                                                <ErrorMessage name="bio" component={TextError} />
                                                            </div>
                                                        </div>

                                                        <div className='w-full text-gray-500'>
                                                            <label htmlFor='portfolio' className='ml-2 mb-1 block text-base font-semibold'>
                                                                Portfolio
                                                            </label>
                                                            <Field 
                                                                type="url" 
                                                                name="website" 
                                                                id='portfolio' 
                                                                className='w-full text-base py-2 px-4 border border-solid rounded-xl border-gray-200 focus:outline-none focus:border-primaryColor' 
                                                                placeholder={initialValues.website} />
                                                            
                                                            <div className='ml-2'>
                                                                <ErrorMessage name="website" component={TextError} />
                                                            </div>
                                                        </div>

                                                        <div className='relative flex w-full flex-row items-center justify-end gap-4'>
                                                            <button className="flex items-center justify-center gap-3 rounded-xl bg-white border border-solid border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-500 hover:text-white"
                                                                onClick={closeModal}>
                                                                Cancel
                                                            </button>

                                                            <button
                                                                type='submit'
                                                                disabled={!formik.isValid} 
                                                                className="flex items-center justify-center gap-3 rounded-xl bg-primaryColor px-4 py-2 font-semibold text-white hover:bg-primaryColor-dark">
                                                                Update
                                                            </button>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
                                    </Formik>
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
