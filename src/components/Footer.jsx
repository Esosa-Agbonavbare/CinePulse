import React from 'react';
import { socials } from '../assets';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
        <div className="flex flex-col items-center font-rubik">
            <img 
            src={socials} 
            alt='social media links' 
            className="mb-4"
            />
            <p className="mb-4 font-rubik">CinePulse Media Direct, LLC. All rights reserved</p>
            <div className="flex justify-around w-full max-w-xs font-rubik">
                <p className="px-2">Privacy</p>
                <p className="px-2">Terms</p>
                <p className="px-2">Help</p>
                <p className="px-2">Devices</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;