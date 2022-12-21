import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PeopleToFollow from "../components/PeopleToFollow";

export default function Timeline() {
    return (
        <div className="bg-[#]">
            <Navbar />
            <div className="relative top-[6rem] px-8 grid grid-cols-4 gap-4 ">
                <div className=""></div>
                <div className=" col-span-2">
                    <Post />
                    <Post />
                </div>
                <div className="">
                    <PeopleToFollow />
                </div>
            </div>
        </div>
    );
}
