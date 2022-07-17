const CDN_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CDN_CLOUD_NAME}/image/upload`;
const CDN_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;
const CDN_UPLOAD_PRESET = process.env.REACT_APP_CDN_UPLOAD_PRESET;

export { CDN_ENDPOINT, CDN_API_KEY, CDN_UPLOAD_PRESET };