import { CDN_ENDPOINT } from "common/constants";
import axios from "axios";
import { toast } from "react-toastify";

// Utilities for uploading images, user avatars, and user cover images from forms to CDN

const uploadImageFromForm = async (formData) => {
    const config = {
        method: "post",
        url: CDN_ENDPOINT,
        headers: { 'content-type': 'multipart/form-data' },
        data: formData
    };

    try {
        const res = await axios(config);
        const uploadedImgUrl = res.data.secure_url;
        const public_id = res.data.public_id;
        return { uploadedImgUrl, public_id };
    } catch(error) {
        console.log(error);
        toast.error("Couldn't upload image");
    }
};

const uploadAvatar = async (formData) => {
    const config = {
        method: "post",
        url: CDN_ENDPOINT,
        headers: { 'content-type': 'multipart/form-data' },
        data: formData,
    };

    try {
        const res = await axios(config);
        console.log(res);
        const uploadedAvatarUrl = res.data.secure_url;
        return uploadedAvatarUrl;
    } catch(error) {
        console.log(error);
        toast.error("Couldn't upload avatar");
    }
};

const uploadCoverImg = async (formData) => {
    const config = {
        method: "post",
        url: CDN_ENDPOINT,
        headers: { 'content-type': 'multipart/form-data' },
        data: formData
    };

    try {
        const res = await axios(config);
        console.log(res);
        const uploadedCoverImgUrl = res.data.secure_url;
        return uploadedCoverImgUrl;
    } catch(error) {
        console.log(error);
        toast.error("Couldn't upload cover image");
    }
};

export { uploadImageFromForm, uploadAvatar, uploadCoverImg };