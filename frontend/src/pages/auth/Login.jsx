import React from "react";

const Login = () => {
    return (
        <>
            <div className="bg-white dark:bg-black">
                <button className="bg-black dark:bg-black text-gray-800 dark:text-white py-2 px-4 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300 cursor-pointer">Dark Mode</button>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <form className="bg-white p-6 rounded shadow-md">
                        <h1 className="text-xl font-bold mb-4">Login</h1>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                            <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" required />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
