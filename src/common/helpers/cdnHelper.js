import { v2 as cloudinary } from 'cloudinary/lib/cloudinary';
import { CDN_UPLOAD_PRESET, CDN_API_SECRET } from "common/constants";

const getTimeStamp = () => Math.round((new Date).getTime()/1000);
const getSignature = (timestamp, authToken) => cloudinary.utils.api_sign_request({ timestamp, upload_preset: CDN_UPLOAD_PRESET, public_id: authToken }, CDN_API_SECRET);

export { getTimeStamp, getSignature };