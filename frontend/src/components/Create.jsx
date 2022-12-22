import React, { useRef, useState } from "react";
import Avatar from "./Avatar";
export default function Create() {
    return (
        <div>
            <div className="border-l border-r   flex gap-2 p-4">
                <Avatar />
                <textarea
                    autosize
                    className="mt-[7px] outline-none w-[-webkit-fill-available]"
                    placeholder="whats happening ?"
                />
            </div>
            <div className="p-4 text-right items-right border-l border-r">
                <button className="bg-[#863A6F] text-[white] hover:bg-[#D989B5] rounded-[2rem] py-2 px-5">
                    Post
                </button>
            </div>
        </div>
    );
}
