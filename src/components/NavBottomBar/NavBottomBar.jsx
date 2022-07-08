import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faUsers, faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBottomBar = ({ active }) => {
    return (
        <nav className="w-full md:hidden sm:block bg-primaryColor p-2.5 fixed bottom-0 left-0 right-0 z-10 border-t border-slate-200">
            <div className="flex flex-row justify-between ml-5 mr-5">
                <Link className={ active === "home" ? `text-secondaryColor`: `text-white`} to="/">
                    <div className="flex justify-center sm:p-3 xs:p-2 xxs:p-2 rounded-full border-transparent hover:bg-gray-200 hover:text-primaryColor">
                        <FontAwesomeIcon icon={faHouse} className="sm:h-6 sm:w-6 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4 inline-block leading-4 shrink-0" />
                    </div>
                </Link>

                <Link className={ active === "explore" ? `text-secondaryColor`: `text-white`} to="/explore">
                    <div className="flex justify-center sm:p-3 xs:p-2 xxs:p-2 rounded-full border-transparent hover:bg-gray-200 hover:text-secondaryColor">
                        <FontAwesomeIcon icon={faCompass} className="sm:h-6 sm:w-6 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4 inline-block leading-4 shrink-0" />
                    </div>
                </Link>

                <Link className={ active === "peers" ? `text-secondaryColor`: `text-white`} to="/peers">
                    <div className="flex justify-center sm:p-3 xs:p-2 xxs:p-2 rounded-full border-transparent hover:bg-gray-200 hover:text-green-500">
                        <FontAwesomeIcon icon={faUsers} className="sm:h-6 sm:w-6 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4 inline-block leading-4 shrink-0" />
                    </div>
                </Link>

                <Link className={ active === "bookmarks" ? `text-secondaryColor`: `text-white`} to="/bookmarks">
                    <div className="flex justify-center sm:p-3 xs:p-2 xxs:p-2 rounded-full border-transparent hover:bg-gray-200 hover:text-blue-600">
                        <FontAwesomeIcon icon={faBookmark} className="sm:h-6 sm:w-6 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4 inline-block leading-4 shrink-0" />
                    </div>
                </Link>

                <Link className={ active === "profile" ? `text-secondaryColor`: `text-white`} to="/profile">
                    <div className="flex justify-center sm:p-3 xs:p-2 xxs:p-2 rounded-full border-transparent hover:bg-gray-200 hover:text-tertiaryColor">
                        <FontAwesomeIcon icon={faUser} className="sm:h-6 sm:w-6 xs:h-5 xs:w-5 xxs:h-4 xxs:w-4 inline-block leading-4 shrink-0" />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export { NavBottomBar };