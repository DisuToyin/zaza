import React from "react";
import Avatar from "./Avatar";
import quora from "../assets/quora.jpeg";
import PostActions from "./PostActions";

export default function Post() {
    return (
        <div className="border-t border-l border-r p-4 ">
            <div className="flex gap-2">
                <Avatar showInitials={false} />
                <div>
                    <div className="flex gap-2 cursor-pointer">
                        <b>Sherry Cam</b>
                        {/* <b>.</b> */}
                        <span className="text-[#863A6F]">Follow</span>
                    </div>
                    <span className="font-light text-[grey] text-sm">
                        Psychological Counselor(2014-present), LA
                    </span>
                </div>
            </div>
            <div className="mt-5">
                <b>
                    What are some psychological tricks and hacks that are useful
                    to know?
                </b>
                <p>
                    1:—Your favorite song is probably favorite because you
                    associate with an emotional event of your life. 2:-If you
                    want to make someone feel uncomfortable, look at their
                    forehead when you're talking to them. 3:-When a group of
                    people laugh, they tend to look at the person they like the
                    most. 4:-The truth will never be more painful than
                    discovering a lie. 5:-Writing down negative thoughts and
                    tossing them in a trash can is a psychological trick to
                    improve your mood. 6:-Being unable to get someone off your
                    mind indicates that you are also on that person’s mind. 7:-A
                    person usually makes a lot of hand gestures when telling a
                    true story. When they lie, a person's hands will stay
                    noticeably still. 8:-The person on your mind, while you’re
                    unable to sleep, is usually the person responsible for your
                    happiness, pain or both. 9:-You appear more attractive to
                    the other person when you make them smile or laugh.
                </p>
                <img className="m-auto py-[2rem]" src={quora} alt="post pic" />
            </div>
            <PostActions />
        </div>
    );
}
