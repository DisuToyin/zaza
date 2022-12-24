import React from "react";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className=" grid grid-cols-2">
            <img src={bg} alt="ss" className=" h-screen" />

            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-[2px] shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#863A6F] md:text-2xl">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="flex gap-2">
                                    <div className="block">
                                        <label
                                            for="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-[2px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                            placeholder="Enter your first name"
                                            required=""
                                        />
                                    </div>
                                    <div className="block">
                                        <label
                                            for="last_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Second Name
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-[2px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                            placeholder="Enter your last name"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-[2px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                        placeholder="Enter Email"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder=" Enter Password"
                                        className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-[2px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder=" Enter Password"
                                        className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-[2px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start"></div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[2px] bg-[#863A6F] text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account ?{" "}
                                    <a
                                        onClick={() => navigate("/login")}
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
