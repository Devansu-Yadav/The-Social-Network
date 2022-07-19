import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost, getExplorePosts, uploadImageFromForm } from "common/services";
import { toast } from 'react-toastify';
import { defaultUserData, CDN_UPLOAD_PRESET, CDN_API_KEY } from "common/constants";
import { getPostDisplayName, getTimeStamp, getSignature } from "common/helpers";

const CreatePostCard = () => {
    const initialValues = {
        avatar: "",
        comments: [],
        likes:[],
        content: "",
        displayName: "",
        imageUrl: "",
        userId: "",
        userName: "",
        imagePublicId: ""
    };

    const dispatch = useDispatch();
    const { userData, authToken } = useSelector((state) => state.auth);
    const [imagePath, setImagePath] = useState("");
    const [imgPublicId, setImgPublicId] = useState("");
    const [formData, setFormData] = useState(initialValues);

    const handleTextChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setFormData({
            ...formData,
            avatar: userData?.avatar || defaultUserData.avatar,
            content: value,
            displayName: getPostDisplayName(userData?.firstName, userData?.lastName),
            imageUrl: imagePath,
            imagePublicId: imgPublicId,
            userId: authToken,
            userName: userData?.userName
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            userName: userData?.userName,
            avatar: userData?.avatar || defaultUserData.avatar
        });

        if(formData.content) {
            await addPost(formData, dispatch);
        }

        setFormData(initialValues);
        setImagePath("");
        setImgPublicId("");
        dispatch(getExplorePosts());
    };

    const handleImage = async (file) => {
        if(file) {
            const timestamp = getTimeStamp();
            const uploadSignatureForImage = getSignature(timestamp);

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CDN_UPLOAD_PRESET);
            formData.append("api_key", CDN_API_KEY);
            formData.append("timestamp", timestamp);
            formData.append("signature", uploadSignatureForImage);
            
            const { uploadedImgUrl, public_id } = await uploadImageFromForm(formData);

            if(uploadedImgUrl) {
                toast.success("Uploaded image!");
                setImagePath(uploadedImgUrl);
                setImgPublicId(public_id);
            }
        }
    };

    useEffect(() => {
        setFormData((form) => ({
            ...form,
            imageUrl: imagePath,
            imagePublicId: imgPublicId,
        }));
    }, [imagePath, imgPublicId]);

    const emojiClickHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="relative my-3 flex h-fit w-full flex-col items-start justify-between gap-4 rounded-lg border-2 border-gray-100 bg-white px-3 pt-4 pb-4 shadow-md">
                <form className="relative flex h-full w-full flex-col items-start justify-between"
                    onSubmit={(e) => handleSubmit(e) }>
                    <div className="align-center flex w-full justify-between">
                        <div className="w-16 pt-3 mr-2">
                            <img className="inline-block xs:w-14 xs:h-14 xxs:w-12 xxs:h-12 rounded-full" src={userData?.avatar || defaultUserData.avatar} alt='The Social Network'/>
                        </div>
                        <textarea className="h-24 w-full pt-4 resize-none flex-wrap whitespace-normal break-words rounded-xl border-2 border-transparent px-3 focus:bg-gray-100 focus:outline-none xs:placeholder:text-base xxs:placeholder:text-sm" 
                        rows={4} name="newPost" placeholder="What's happening, Devansu?" value={formData.content}
                        onChange={(e) => handleTextChange(e) }></textarea>
                    </div>
                    
                    { imagePath && (
                        <div className="my-3 mx-3 flex w-1/2 justify-start ">
                            <img
                                src={imagePath}
                                alt="profile of user"
                                className="mr-auto h-20 w-full rounded-md bg-white object-cover opacity-40"
                            />
                        </div>
                    )}

                    <div className="relative flex w-full flex-row items-center gap-4">
                        <div className="flex items-center justify-center group rounded-full border-2 border-gray-100 bg-white p-4 hover:border-2 hover:border-tertiaryColor hover:outline-2">
                            <label htmlFor="upload-picture" className="flex items-center justify-center text-gray-600">
                                <input type="file" id="upload-picture" accept="image/*" hidden 
                                onChange={(e) => {
                                    handleImage(e.target.files[0]);
                                }} />
                                <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" id="" icon={faImage} />
                            </label>
                        </div>
                        <button onClick={(e) => emojiClickHandler(e)} className="group rounded-full flex items-center justify-center text-gray-600 border-2 border-gray-100 bg-white p-4 hover:border-2 hover:border-tertiaryColor hover:outline-2">
                            <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" icon={faFaceSmile} />
                        </button>
                        <button className="ml-auto flex w-1/4 items-center justify-center gap-3 rounded-xl bg-primaryColor  py-2 font-semibold text-white hover:bg-primaryColor-dark">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { CreatePostCard };