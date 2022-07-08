import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <form className="flex 
        flex-row
        items-center  
        rounded-md 
        border-2 
        border-slate-400
        sm:grow
        xs:grow-0
        xxs:grow-0
        focus-within:border-primaryColor
        xl:mx-6
        lg:mx-3
        md:mx-4
        sm:mx-5
        xs:mx-0
        xxs:mx-0
        sm:w-auto
        xs:w-3/5
        xxs:w-3/5">
            <button className='h-full bg-transparent border-0 text-gray-500 cursor-pointer outline-hidden' type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer text-base m-2.5"/>
            </button>
            <input className="text-base border-0 lg:p-2.5 md:p-1.5 sm:p-1.5 xs:p-1 xxs:p-1 placeholder-gray-500 w-full outline-hidden focus:outline-none" type="text" placeholder="Search Users"/>
        </form>
    );
}

export { SearchBar };