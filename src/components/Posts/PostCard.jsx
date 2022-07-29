import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostOptionsMenu } from "components";
import { faComment, faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faBookmark as bookmarkIcon, faHeart as heartIcon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { 
    bookmarkPost,
    dislikePost,
    likePost,
    removePostFromBookmarks
} from "common/services";
import { defaultUserData } from "common/constants";
import { getPostTime } from "common/helpers";
import { toast } from "react-toastify";

const PostCard = ({ post, className }) => {
    const dispatch = useDispatch();
    const postTime = getPostTime(post?.createdAt);
    const { userData, authToken } = useSelector((state) => state.auth);

    const isLiked = post?.likes?.find((user) => user?.id === authToken);
    const isBookmarked = userData?.bookmarks?.some((bookmarkedPost) => bookmarkedPost?.id === post?.id);

    const shareButtonClickHandler = async (event) => {
        event.preventDefault();

        try {
            await navigator.clipboard.writeText(window.location.href + "post/" + post?.id);
            toast.info("Copied Post URL to clipboard!");
        } catch(err) {
            toast.error("Could not copy Post URL to clipboard!");
        }
    };

    return (
        <div className={`mb-4 xs:p-4 xxs:p-3 rounded-2xl shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] ${className}`}>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row items-center justify-between pl-2 pr-2">
                    <Link to={`/profile/${post?.userId}`}>
                        <div className="flex flex-row items-center gap-x-2">
                            <span className="inline-flex items-center justify-center shrink-0">
                                <img className="inline-block sm:w-14 sm:h-14 xs:!w-12 xs:!h-12 xxs:w-10 xxs:h-10 rounded-full" src={`${post?.avatar || defaultUserData.avatar }`} alt={`${post?.userName}`} />
                            </span>

                            <div className="flex flex-col">
                                <div className="flex flex-row text-gray-600 sm:gap-x-1 xs:gap-x-3 xxs:gap-x-1">
                                    <h2 className="block m-0 p-0 overflow-hidden xs:max-w-[130px] xxs:max-w-[90px] text-ellipsis hover:underline break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm font-bold">{post?.displayName}</h2>
                                    <h2 className="sm:block xs:hidden xxs:hidden m-0 p-0 overflow-hidden sm:max-w-[160px] text-ellipsis break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm">@{post?.userName}</h2>
                                    <p className="sm:hidden xs:flex xxs:flex flex-row gap-x-1 m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-sm text-gray-700">
                                        <span className="inline break-words text-sm text-gray-600 font-bold">·</span>
                                        { postTime } ago
                                    </p>   
                                </div>
                                <h2 className="sm:hidden xs:block xxs:block m-0 p-0 overflow-hidden max-w-[140px] text-ellipsis break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm">@{post?.userName}</h2>
                                <p className="sm:flex xs:hidden xxs:hidden flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-sm text-gray-700">{ postTime } ago</p>
                            </div>
                        </div>
                    </Link>
                    { post?.userId === authToken && <PostOptionsMenu post={post} /> }
                </div>
                <div>
                    <p className="text-base text-gray-500 sm:pl-5 sm:pr-5 xs:pl-3 xs:pr-3 xxs:pl-3 xxs:pr-3">
                        {post?.content}
                    </p>
                    { post?.imageUrl !== "" && <div className="rounded-md p-4">
                        <img className="h-full w-full rounded-lg" src={post?.imageUrl} alt="post media" />
                    </div>}
                </div>
                <div className="flex flex-row items-center sm:justify-between xs:justify-evenly xxs:justify-evenly">
                    <Link to={`/post/${post?.id}`} className="flex flex-row items-center">
                        <button className="ml-1 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                            <FontAwesomeIcon icon={faComment} />
                        </button>
                        <p className="text-gray-700">{post?.comments?.length}</p>
                    </Link>

                    <div className="flex flex-row items-center">
                        <button 
                            className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-red-500"
                            onClick={(e) => {
                                isLiked ? dislikePost(post?.id, authToken, userData, dispatch)
                                        : likePost(post?.id, authToken, userData, dispatch);
                            }}>
                            { isLiked ? <FontAwesomeIcon className="text-red-500" icon={heartIcon} /> : <FontAwesomeIcon icon={faHeart} /> }
                        </button>
                        <p className="text-gray-700">{post?.likes?.length}</p>
                    </div>

                    <div className="flex flex-row items-center">
                        <button 
                            className="ml-2 mr-2 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-blue-600"
                            onClick={(e) => {
                                isBookmarked ? removePostFromBookmarks(authToken, post, dispatch)
                                             : bookmarkPost(authToken, post, dispatch);
                            }}>
                            { isBookmarked ? <FontAwesomeIcon className="text-primaryColor" icon={bookmarkIcon} /> : <FontAwesomeIcon icon={faBookmark} /> }
                        </button>
                    </div>

                    <div className="flex flex-row items-center">
                        <button onClick={(e) => shareButtonClickHandler(e)} className="ml-2 mr-2 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-tertiaryColor">
                            <FontAwesomeIcon icon={faShareNodes} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PostCard };