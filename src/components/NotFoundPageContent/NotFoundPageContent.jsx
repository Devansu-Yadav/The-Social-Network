import { Link } from "react-router-dom";

const NotFoundPageContent = () => {
    return (
        <div className="w-4/5 gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
            <h3 className="xs:!text-3xl xxs:text-xl text-primaryColor">404 Page Not Found :(</h3>
            <img className="w-4/5" src="https://res.cloudinary.com/bluekart/image/upload/v1654776386/page-not-found_uoqq1i.svg" alt="404 Page Not Found" />
            <Link to="/">
                <button className="text-lg py-2 px-3 rounded-xl text-primaryColor bg-transparent border border-solid border-primaryColor hover:bg-purple-100">{"<- Back To Home"}</button>
            </Link>
        </div>
    );
};

export { NotFoundPageContent };