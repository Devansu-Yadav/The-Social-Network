import { Link } from "react-router-dom";
import { SearchBar, AvatarMenu } from "components";

const NavBar = () => {
    return (
        <nav className="flex flex-row items-center self-start justify-between p-4 shadow">
            <Link className="flex flex-row items-center justify-center gap-x-2" to="/">
                <h2 className="xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl sm:block xs:hidden xxs:hidden font-medium">The <span className="font-bold text-primaryColor">Social</span> Network</h2>
                <img className="inline-block xxs:h-10 xxs:w-10 sm:hidden xs:inline-block xxs:inline-block" src='/assets/images/logo-med.png' alt='The Social Network'/>
            </Link>

            <SearchBar />
            <AvatarMenu />
        </nav>
    );
};

export { NavBar };