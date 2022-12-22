import React from "react";
import { BiUpvote, BiDownvote, BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";

export default function PostActions() {
    return (
        <div className="flex text-[grey] cursor-pointer gap-10">
            <div className="flex border  rounded-[2rem] p-2 gap-2">
                <span className="flex gap-2">
                    {" "}
                    <BiUpvote className="text-[130%] font-light text-[grey]" />{" "}
                    <span>100</span>
                </span>
                <span className="flex gap-2">
                    <BiDownvote className="text-[130%] text-[grey]" />
                    <span>10</span>
                </span>
            </div>
            <div className="flex gap-2">
                <span className="flex border rounded-[2rem] p-2 gap-2">
                    <FaRegComment className="text-[grey]    text-[130%]" />
                    <span>10</span>
                </span>
                <span className="flex border rounded-[2rem] p-2 gap-2">
                    <BiRepost className="text-[grey] text-[150%]" />
                    <span>5</span>
                </span>
            </div>
            <div className="self-center ml-auto">
                {" "}
                <GoKebabHorizontal />
            </div>
        </div>
    );
}
