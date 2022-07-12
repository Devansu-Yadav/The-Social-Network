import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faUsers, faBookmark, faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const NavSideBar = ({ active }) => {
    return (
        <aside className="lg:w-1/12 md:w-2/12 md:block sm:hidden xs:hidden xxs:hidden h-screen p-2.5 sticky top-0 border-r border-slate-200">
            <div className="flex flex-col items-end justify-between h-full">
                <div className="flex flex-col items-end lg:mt-5 md:mt-5 pl-1 pr-1">
                    <img className="inline-block lg:h-12 lg:w-12 md:h-10 md:w-10" src='/assets/images/logo-med.png' alt='The Social Network'/>
                </div>

                <div className="flex flex-col justify-between gap-y-5 h-1/2">
                    <Link className={ active === "home" ? `text-primaryColor`: `text-gray-600`} to="/">
                        <div className="flex justify-center p-3 rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                            <FontAwesomeIcon icon={faHouse} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                        </div>
                    </Link>

                    <Link className={ active === "explore" ? `text-primaryColor`: `text-gray-600`} to="/explore">
                        <div className="flex justify-center p-3 rounded-full border-transparent hover:bg-gray-200 hover:text-secondaryColor">
                            <FontAwesomeIcon icon={faCompass} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                        </div>
                    </Link>

                    <Link className={ active === "peers" ? `text-primaryColor`: `text-gray-600`} to="/peers">
                        <div className="flex justify-center p-3 rounded-full border-transparent hover:bg-gray-200 hover:text-green-500">
                            <FontAwesomeIcon icon={faUsers} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                        </div>
                    </Link>

                    <Link className={ active === "bookmarks" ? `text-primaryColor`: `text-gray-600`} to="/bookmarks">
                        <div className="flex justify-center p-3 rounded-full border-transparent hover:bg-gray-200 hover:text-blue-600">
                            <FontAwesomeIcon icon={faBookmark} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                        </div>
                    </Link>

                    <Link className={ active === "profile" ? `text-primaryColor`: `text-gray-600`} to="/profile">
                        <div className="flex justify-center p-3 rounded-full border-transparent hover:bg-gray-200 hover:text-tertiaryColor">
                            <FontAwesomeIcon icon={faUser} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                        </div>
                    </Link>
                </div>

                <button className="flex justify-center p-3 text-red-600 mb-5 rounded-full border-transparent hover:bg-gray-200">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="lg:h-7 lg:w-7 md:h-7 md:w-7 inline-block leading-4 shrink-0" />
                </button>
            </div>
        </aside>
    );
};

export { NavSideBar };