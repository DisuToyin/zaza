import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PeopleToFollow from "../components/PeopleToFollow";
import Create from "../components/Create";
import News from "../components/News";

export default function Timeline() {
    return (
        <div className="bg-[#]">
            <Navbar />
            <div className="relative top-[4.4rem] px-8 grid grid-cols-4 gap-4 ">
                <div className="">
                    <News />
                </div>
                <div className=" col-span-2">
                    <Create />
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
