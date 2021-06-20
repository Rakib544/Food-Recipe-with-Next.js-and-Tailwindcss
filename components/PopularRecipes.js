import React from 'react';
import Image from 'next/image';
import curryImg from '../images/curry.jpg';

const PopularRecipes = () => {
    return (
        <>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8">

                <div className='bg-white rounded overflow-hidden shadow relative'>
                    <Image
                        src={curryImg}
                        alt="curry"
                        height={400}
                        width={400}
                        layout="responsive"
                        // className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="font-bold">5 Bean Chilli Stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                    </div>
                    <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                        <span>25 minutes</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularRecipes;