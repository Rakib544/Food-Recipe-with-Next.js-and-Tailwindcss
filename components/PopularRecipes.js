import React from 'react';
import Image from 'next/image';
import curryImg from '../images/curry.jpg';

const PopularRecipes = () => {
    return (
        <>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                <div className='card hover:shadow-lg'>
                    <Image
                        src={curryImg}
                        alt="curry"
                        height={300}
                        width={400}
                        layout="responsive"
                    // className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="font-bold">5 Bean Chilli Stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                    </div>
                    <div className="badge flex items-center justify-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>25 minutes</span>
                    </div>
                </div>

                <div className='card hover:shadow-lg'>
                    <Image
                        src={curryImg}
                        alt="curry"
                        height={300}
                        width={400}
                        layout="responsive"
                    // className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="font-bold">5 Bean Chilli Stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                    </div>
                    <div className="badge flex items-center justify-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>25 minutes</span>
                    </div>
                </div>

                <div className='card hover:shadow-lg'>
                    <Image
                        src={curryImg}
                        alt="curry"
                        height={300}
                        width={400}
                        layout="responsive"
                    // className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="font-bold">5 Bean Chilli Stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                    </div>
                    <div className="badge flex items-center justify-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>25 minutes</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PopularRecipes;