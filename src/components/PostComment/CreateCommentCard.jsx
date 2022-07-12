import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const CreateCommentCard = ({ post }) => {
    return (
        <div className='w-full flex flex-row justify-center border-t border-solid border-gray-200'>
            <div className="relative my-3 flex h-fit w-[95%] flex-col items-start justify-between gap-4 rounded-lg bg-white px-3 pt-4 pb-4">
                <form className="relative flex h-full w-full gap-y-4 flex-col items-start justify-between">
                    <div className="align-center flex w-full justify-between">
                        <div className="w-16 pt-3 mr-2">
                            <img className="inline-block xs:!w-12 xs:!h-12 xxs:w-10 xxs:h-10 rounded-full" src={post.avatar} alt='The Social Network'/>
                        </div>
                        <textarea className="h-24 w-full pt-4 resize-none flex-wrap whitespace-normal break-words rounded-xl border-2 border-transparent px-3 focus:bg-gray-100 focus:outline-none xs:placeholder:text-base xxs:placeholder:text-sm" 
                        rows={4} name="new post" placeholder="What are your thoughts?"></textarea>
                    </div>
                    <div className="relative flex w-full flex-row items-center justify-end gap-4">
                        <button className="group rounded-full flex items-center justify-center text-gray-600 border-2 border-gray-100 bg-white p-4 hover:border-2 hover:border-tertiaryColor hover:outline-2 ">
                            <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" icon={faFaceSmile} />
                        </button>
                        <button className="flex w-1/4 items-center justify-center gap-3 rounded-xl bg-primaryColor py-2 font-semibold text-white hover:bg-primaryColor-dark">
                            Reply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { CreateCommentCard };