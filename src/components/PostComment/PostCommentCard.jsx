import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostCommentOptionsMenu } from "components";
import { faComment, faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faBookmark as bookmarkIcon, faHeart as heartIcon } from "@fortawesome/free-solid-svg-icons";
import { defaultUserData } from "common/constants";
import { useSelector } from "react-redux";

const PostCommentCard = ({ post, comment }) => {
    const { authToken } = useSelector((state) => state.auth);

    return (
        <div className="w-full flex flex-row justify-center mb-4 xs:px-0 xxs:px-0 xs:py-4 xxs:py-3 rounded-none shadow-none border-t border-solid border-gray-200">
            <div className="flex flex-col w-[95%] gap-y-3">
                <div className="flex flex-row items-center justify-between pl-2 pr-2">
                    <Link to={`/profile/${comment?.userId}`}>
                        <div className="flex flex-row items-center gap-x-2">
                            <span className="inline-flex items-center justify-center shrink-0">
                                <img className="inline-block xs:!w-12 xs:!h-12 xxs:w-10 xxs:h-10 rounded-full" src={`${comment?.avatar || defaultUserData.avatar }`} alt={`${comment?.userName}`} />
                            </span>

                            <div className="flex flex-col">
                                <div className="flex flex-row text-gray-600 sm:gap-x-1 xs:gap-x-3 xxs:gap-x-1">
                                    <h2 className="block m-0 p-0 overflow-hidden xs:max-w-[130px] xxs:max-w-[90px] text-ellipsis hover:underline break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm font-bold">{comment?.displayName}</h2>
                                    <h2 className="sm:block xs:hidden xxs:hidden m-0 p-0 overflow-hidden sm:max-w-[160px] text-ellipsis break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm">@{comment?.userName}</h2>  
                                </div>
                                <h2 className="sm:hidden xs:block xxs:block m-0 p-0 overflow-hidden max-w-[140px] text-ellipsis break-words whitespace-nowrap sm:text-base xs:text-sm xxs:text-sm">@{comment?.userName}</h2>
                            </div>
                        </div>
                    </Link>
                    { comment?.userId === authToken && <PostCommentOptionsMenu post={post} comment={comment} /> }
                </div>
                <div>
                    <p className="text-base text-gray-500 sm:pl-5 sm:pr-5 xs:pl-3 xs:pr-3 xxs:pl-3 xxs:pr-3">
                        {comment?.content}
                    </p>
                    { comment?.imageUrl && <div className="rounded-md p-4">
                        <img className="h-full w-full rounded-lg" src={comment?.imageUrl} alt="comment media" />
                    </div> }
                </div>
            </div>
        </div>
    );
};

export { PostCommentCard };