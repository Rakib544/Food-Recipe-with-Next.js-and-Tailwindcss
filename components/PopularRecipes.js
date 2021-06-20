import React from 'react';
import Image from 'next/image';
import curryImg from '../images/curry.jpg';

const PopularRecipes = () => {
    return (
        <>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8">
                {/* Cart Goes here */}
                <div>
                    <Image
                        src={curryImg}
                        alt="curry"
                        height={400}
                        width={400}
                        layout="responsive"
                    />
                    <div>
                        <span>5 Bean Chilli Stew</span>
                        <span>Recipe by Mario</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularRecipes;