import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const {text} = useTypewriter({
        words: ['Connect', 'Explore', 'Build', 'Share!'],
        loop: 0
    });

    return (
        <div className="flex flex-col justify-center mb-5 xl:w-1/2 xxs:w-4/5 h-screen">
            <h2 className="flex flex-col gap-y-3 sm:text-6xl xs:!text-5xl xxs:text-4xl text-center text-slate-800 font-bold">
                The Social network of the future to
                <div className="sm:text-6xl xs:!text-5xl xxs:text-4xl text-blue-700 font-bold">
                    {text}
                    <Cursor />
                </div>
            </h2>          
        </div>
    );
};

export { Hero };