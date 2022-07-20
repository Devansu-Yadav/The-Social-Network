import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PostCard, CreateCommentCard, PostCommentCard } from "components";

const SinglePost = ({ post }) => {
    return (
        <div className="p-3 mb-10">
            <div className="flex flex-col w-full rounded-2xl shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)]">
                <div className="flex flex-row text-gray-600 items-center p-4 border-b border-solid border-gray-200 gap-x-2">
                    <Link to="/">
                        <button className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </Link>
                    <p className="text-xl">Posts</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <PostCard post={post} className="w-full rounded-none shadow-none" />
                    <CreateCommentCard post={post} />
                    { post?.comments?.map((comment) => {
                        return (
                            <PostCommentCard key={comment?.id} post={post} comment={comment} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { SinglePost };