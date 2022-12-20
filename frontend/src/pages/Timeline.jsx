import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Timeline() {
    return (
        <div>
            <Navbar />
            <div className="relative top-[6rem] grid grid-cols-4 ">
                <div className="">011111111111111</div>
                <div className=" col-span-2">
                    <Post />
                    <Post />
                </div>
                <div className="">0333333333333333333</div>
            </div>
        </div>
    );
}
