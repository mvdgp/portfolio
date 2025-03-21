import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='absolute h-full w-full text-red-500 flex justify-center items-end z-[1]'>test</div>
            <div className="h-full w-full absolute bg-contain bg-no-repeat bg-bottom md:bg-left md:left-20 bg-[url('/Me2.png')] filter grayscale contrast-[120%]" />
        </div>
    );
};

export default Home;