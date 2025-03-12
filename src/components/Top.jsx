import React from "react";
import loc from '../assets/loc.png'

const TopBar = () => {
    return (
            <div className="flex  items-center p-2 text-gray-600 text-sm bg-gray-100 mb-[20px]">
                <div className="w-[1150px] mx-auto flex justify-between">
                <div className="flex items-center gap-2">
                    <img src={loc} alt="Location" className="w-4 h-4" />
                    <span>Tashkent</span>
                    <a href="#" className="ml-4">About Us</a>
                    <a href="#" className="ml-4">Products</a>
                    <a href="#" className="ml-4">Contacts</a>
                </div>
                <div className="flex items-center gap-4">
                    <span>+998 (71) 123-45-67</span>
                    <span>Uz ▾</span>
                </div>
            </div>
        </div>

    );
};
export default TopBar;