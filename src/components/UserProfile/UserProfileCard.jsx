import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { defaultUserData } from "common/constants";
import { EditUserProfileModal } from "components";

const UserProfileCard = ({ user, isUserNative, isFollowingUser, userPosts }) => {
    const [editBtnClicked, setEditBtnClicked] = useState(false);
    const navigate = useNavigate();
    const coverImg = user.coverImg || defaultUserData.coverImg;
    const userBio = user.bio || defaultUserData.bio;

    const closeModal = () => {
        setEditBtnClicked(false);
    }

    return (
        <>
            <div className="md:hidden xxs:flex md:static xxs:sticky xxs:top-0 md:backdrop-blur-none xxs:backdrop-blur-[12px] md:bg-inherit xxs:bg-white/[0.85] md:z-0 xxs:z-10 flex-row text-gray-600 items-center p-4 border-b border-gray-200 gap-x-2 border-solid">
                <Link to="/">
                    <button className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
                <p className="text-xl">{user.firstName + " " + user.lastName}</p>
            </div>

            <div className="p-3">
                <div className="flex flex-col w-full rounded-2xl shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)]">
                    <div className="md:flex xxs:hidden md:static xxs:sticky xxs:top-0 md:backdrop-blur-none xxs:backdrop-blur-[12px] md:bg-inherit xxs:bg-white/[0.85] md:z-0 xxs:z-10 flex-row text-gray-600 items-center p-4 md:border-b border-gray-200 gap-x-2 border-solid">
                        <Link to="/">
                            <button className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                        </Link>
                        <p className="text-xl">{user.firstName + " " + user.lastName}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="p-4 break-words">
                            <img className="object-cover rounded-2xl max-w-full" src={coverImg} alt="User profile cover" />
                        </div>

                        <div className="flex flex-col p-4 w-[95%] relative xs:!bottom-20 xxs:bottom-16">
                            <div className="flex flex-row items-end justify-between">
                                <span className="inline-flex sm:w-32 sm:h-32 xs:!w-28 xs:!h-28 xxs:w-24 xxs:h-24 relative items-center justify-center shrink-0">
                                    <img className="inline-block w-full h-full object-cover max-w-full rounded-full border-4 border-solid border-tertiaryColor" src={`${user.avatar}`} alt={`${user.userName}`} />
                                </span>
                                <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                                    { isUserNative ? (<button className="outline-none rounded-full text-lg px-6 min-w-[32px] min-h-[32px] bg-secondaryColor-light text-whiteColor hover:bg-secondaryColor"
                                            onClick={() => setEditBtnClicked(true)}>
                                        Edit Profile
                                    </button>
                                    ) : (
                                    <button className="outline-none rounded-full text-lg px-6 min-w-[32px] min-h-[32px] bg-primaryColor text-whiteColor hover:bg-primaryColor-dark">
                                        { isFollowingUser ? "Unfollow": "Follow" }
                                    </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-row flex-wrap mt-4 text-gray-600 sm:gap-x-1 xs:gap-x-3 xxs:gap-x-1">
                                <h2 className="block m-0 p-0 overflow-hidden break-words whitespace-nowrap text-xl font-bold">{user.firstName + " " + user.lastName}</h2>
                                <h2 className="block m-0 p-0 overflow-hidden break-words text-base leading-7 whitespace-nowrap">{user.userName}</h2>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-600 text-base">
                                    {userBio}
                                </p>

                                { user.website !== "" && <div className="flex flex-row mt-4 items-center absolute bottom-[-10%]">
                                    <div className="flex flex-row items-center gap-x-2 text-base text-gray-600">
                                        <p>
                                            Portfolio:
                                        </p>
                                        <Link className="cursor-pointer text-primaryColor hover:underline" to={user.website}>{user.website}</Link>
                                    </div>
                                </div> }
                            </div>

                            <div className="flex flex-row items-center sm:!gap-x-5 xxs:gap-x-3 mt-4">
                                <div className="flex flex-row text-gray-600 gap-x-1">
                                    <h2 className="block m-0 p-0 overflow-hidden break-words whitespace-nowrap text-xl font-bold">{user?.following.length}</h2>
                                    <h2 className="block m-0 p-0 overflow-hidden break-words text-base leading-7 whitespace-nowrap">Following</h2>
                                </div>
                                <div className="flex flex-row text-gray-600 gap-x-1">
                                    <h2 className="block m-0 p-0 overflow-hidden break-words whitespace-nowrap text-xl font-bold">{user?.followers.length}</h2>
                                    <h2 className="block m-0 p-0 overflow-hidden break-words text-base leading-7 whitespace-nowrap">Followers</h2>
                                </div>
                                <div className="flex flex-row text-gray-600 gap-x-1">
                                    <h2 className="block m-0 p-0 overflow-hidden break-words whitespace-nowrap text-xl font-bold">{userPosts.length}</h2>
                                    <h2 className="block m-0 p-0 overflow-hidden break-words text-base leading-7 whitespace-nowrap">Posts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                { editBtnClicked && (
                    <EditUserProfileModal isOpenModal={editBtnClicked} closeModal={closeModal} user={user} />
                )}
            </div>
        </>
    );
};

export { UserProfileCard };