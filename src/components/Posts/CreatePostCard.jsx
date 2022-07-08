import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const CreatePostCard = () => {
    return (
        <div>
            <div className="relative my-3 flex h-fit w-full flex-col items-start justify-between gap-4 rounded-lg border-2 border-gray-100 bg-white px-3 pt-4 pb-4 shadow-md">
                <form className="relative flex h-full w-full flex-col items-start justify-between">
                    <div className="align-center flex w-full justify-between">
                        <div className="w-16 pt-3 mr-2">
                            <img className="inline-block xs:w-14 xs:h-14 xxs:w-12 xxs:h-12 rounded-full" src='https://devansuyadav.live/assets/Devansu_Yadav.jpg' alt='The Social Network'/>
                        </div>
                        <textarea className="h-24 w-full pt-4 resize-none flex-wrap whitespace-normal break-words rounded-xl border-2 border-transparent px-3 focus:bg-gray-100 focus:outline-none xs:placeholder:text-base xxs:placeholder:text-sm" rows={4} name="new post" placeholder="What's happening, Devansu?"></textarea>
                    </div>
                    <div className="relative flex w-full flex-row items-center gap-4">
                        <div className="flex items-center justify-center group rounded-full border-2 border-gray-100 bg-white p-4 hover:border-2 hover:border-tertiaryColor hover:outline-2">
                            <label htmlFor="upload-picture" className="flex items-center justify-center text-gray-600">
                                <input type="file" id="upload-picture" accept="image/*" hidden/>
                                <FontAwesomeIcon className="group-hover:font-bold group-hover:text-tertiaryColor" id="" icon={faImage} />
                            </label>
                        </div>
                        <button className="group rounded-full flex items-center justify-center text-gray-600 border-2 border-gray-100 bg-white p-4 hover:border-2 hover:border-tertiaryColor hover:outline-2 ">
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