import React from "react";
import disu from "../assets/disupic.jpg";
export default function Avatar({ showInitials = true }) {
    return (
        <>
            {showInitials === true ? (
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        JL
                    </span>
                </div>
            ) : (
                <div className="flex items-center space-x-4">
                    <img className="w-9 h-10 rounded-full" src={disu} alt="" />
                </div>
            )}
        </>
    );
}
