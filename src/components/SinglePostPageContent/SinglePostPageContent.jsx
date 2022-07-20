import { SinglePost } from "components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setPost } from "redux/slices/postSlice";

const SinglePostPageContent = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { post, posts } = useSelector((state) => state.post);
    const postData = post;

    useEffect(() => {
        const findPost = posts?.find((post) => post?.id === postId);
        dispatch(setPost(findPost));
    }, [postId, posts]);

    return (
        <main className="flex flex-col items-center justify-between p-4 sm:px-4 xxs:px-1">
            <div className="flex flex-col gap-y-12 xs:w-10/12 xxs:w-full">
                <SinglePost post={postData} />
            </div>
        </main>
    );
}

export { SinglePostPageContent };