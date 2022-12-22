import React from "react";
import { RxPerson } from "react-icons/rx";
import Avatar from "./Avatar";

export default function PeopleToFollow() {
    return (
        <div className="border-t border-r border-l my-[1rem]">
            <span className="flex gap-2   p-2 border-b">
                <RxPerson className="bg-[#863A6F] text-[white]" />
                <span className="font-light text-sm text-[grey]">
                    People To Follow
                </span>
            </span>
            <div className="p-2 border-b gap-2 flex">
                <Avatar />
                <div className="flex text-sm cursor-pointer gap-2 items-center">
                    <span>Richard Cooper</span>
                    <span className="text-[#863A6F]">Follow</span>
                </div>
            </div>
            <div className="p-2 border-b gap-2 flex">
                <Avatar />
                <div className="flex text-sm cursor-pointer gap-2 items-center">
                    <span>Disu HillSong</span>
                    <span className="text-[#863A6F]">Follow</span>
                </div>
            </div>
            <div className="p-2 border-b gap-2 flex">
                <Avatar />
                <div className="flex text-sm cursor-pointer gap-2 items-center">
                    <span>John Doe</span>
                    <span className="text-[#863A6F]">Follow</span>
                </div>
            </div>
        </div>
    );
}
