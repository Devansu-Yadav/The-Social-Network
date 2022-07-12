const ExplorePostsBanner = () => {
    return (
        <div className="p-3">
            <div className='p-5 flex flex-row items-center justify-between w-full rounded-2xl shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)]'>
                <div className='flex flex-col gap-y-2'>
                    <h2 className='sm:text-2xl xs:text-xl xxs:text-xl text-primaryColor font-bold'>Hey Devansu 👋,</h2>
                    <p className='text-base text-gray-600 font-semibold'>Check out the latest posts by your peers!</p>
                    <p className='text-base text-gray-500'>Don't forget to drop some 💜 to new creators here 🤗</p>
                </div>
                <div className='max-w-[30%] xs:min-w-[150px] xs:!block xxs:hidden'>
                    <img className='block max-w-full h-auto' src='https://res.cloudinary.com/bluekart/image/upload/v1657289727/social-media-app/explore-page-banner-photo_hk4s5s.png' alt='Explore posts' /> 
                </div>
            </div>
        </div>
    );
};

export { ExplorePostsBanner };