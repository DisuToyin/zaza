import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "./Avatar";
import { Link, useNavigate } from "react-router-dom";

export default function News() {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const getNews = async () => {
        try {
            const data = await axios.get(
                `https://newsdata.io/api/1/news?apikey=${
                    import.meta.env.VITE_NEWSAPIKEY
                }&q=pegasus&language=en
                `
            );
            setNews(data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    console.log(news);
    return (
        <div className="my-[1rem]">
            {news?.results?.map((n) => {
                return (
                    <div className="border-b ">
                        <a href={n.link} target="_blank">
                            <h1 className="font-bold text-[grey] my-[1rem]">
                                {n.title}
                            </h1>
                            <div className="flex gap-2">
                                {" "}
                                <Avatar
                                    showInitials={false}
                                    src={
                                        n.image_url ||
                                        "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
                                    }
                                />
                                <span className="self-center">
                                    {n.creator || "N/A"}
                                </span>
                            </div>

                            <div className="mb-[1rem]"></div>
                        </a>{" "}
                    </div>
                );
            })}
        </div>
    );
}
