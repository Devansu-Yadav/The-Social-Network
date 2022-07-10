import { Link } from "react-router-dom";

const PeersCard = ({ user, isFollowed }) => {
    return (
        <div className="text-gray-600 sm:max-w-xs xxs:max-w-fit group flex w-full items-center rounded-2xl px-2 py-2 text-base shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)]">
            <div className="mr-2">
                <img className="inline-block h-12 w-12 rounded-full" src={user.avatar} alt="User avatar" />
            </div>
            <div className="flex flex-col shrink-0 m-0 p-0 items-stretch justify-center basis-0 grow">
                <div className="flex flex-row shrink-0 m-0 p-0 items-center justify-between basis-auto">
                    <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                        <div className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full">
                            <div className="flex flex-col m-0 p-0 items-stretch shrink max-w-full">
                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none hover:underline max-w-full cursor-pointer">
                                    <div className="flex flex-row shrink-0 m-0 p-0 items-center max-w-full">
                                        <span className="flex m-0 p-0 items-center overflow-hidden break-words whitespace-nowrap text-base font-bold">{user.firstName + " " + user.lastName}</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-row m-0 p-0 items-stretch shrink max-w-full">
                                <Link to="/" className="flex flex-col m-0 p-0 items-stretch shrink outline-none max-w-full cursor-pointer">
                                    <span className="flex flex-row m-0 p-0 items-center overflow-hidden break-words text-ellipsis whitespace-nowrap text-base max-w-full">{user.userName}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shrink-0 m-0 p-0 items-stretch ml-3 min-w-[77px]">
                        <button className="outline-none rounded-full text-base border-solid pl-4 pr-4 min-w-[32px] min-h-[32px] transition duration-200 hover:bg-primaryColor-dark bg-primaryColor text-whiteColor">
                            { isFollowed ? "Unfollow": "Follow" }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PeersCard };