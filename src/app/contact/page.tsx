"use client"
// Import necessary styles from Tailwind CSS
import "tailwindcss/tailwind.css";

import React, { useState } from "react";

interface Person {
    name: string;
    age: number;
}

const Page = () => {
    const [user, setUser] = useState<Person>({ name: "", age: 0 });

    // Change name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({
            ...prev,
            name: String(e.target.value),
        }));
    };

    // Change age
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({
            ...prev,
            age: Number(e.target.value),
        }));
    };

    // Submit form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-500 h-screen flex items-center justify-center">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-white mb-8">
                    Contact Page
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <input
                        className="border-2 border-gray-500 rounded-md bg-gray-800 text-white p-2 mb-4 focus:outline-none focus:border-blue-500 transition"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleNameChange}
                    />

                    {/* Age */}
                    <input
                        className="border-2 border-gray-500 rounded-md bg-gray-800 text-white p-2 mb-4 focus:outline-none focus:border-blue-500 transition"
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Age"
                        value={user.age}
                        onChange={handleAgeChange}
                    />

                    {/* Submit button */}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
