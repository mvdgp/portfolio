import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Foreground content */}
            <div className="
                absolute flex justify-center items-end z-[2]
                h-full w-full
                text-red-500">
                    test
            </div>

            {/* Background image at the bottom with blur */}
            <div className="
                h-full w-full
                absolute md:bg-left md:left-20 z-[1]
                bg-contain bg-no-repeat bg-bottom bg-[url('/Me2.png')]
                filter grayscale contrast-[120%]"
            />

            {/* Background image behind */}
            <div className="
                h-screen w-full
                absolute md:bg-left md:left-20 z-0
                bg-contain bg-no-repeat bg-bottom bg-[url('/Me2.png')]
                filter grayscale contrast-[120%] blur-3xl"
            />
        </div>
    );
};

export default Home;