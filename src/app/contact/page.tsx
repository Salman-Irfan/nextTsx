"use client";
import React, { useState } from "react";

interface Person {
    name: string;
    age: number;
}

const Page = () => {
    const [user, setUser] = useState<Person>({ name: "", age: 0 });

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({
            ...prev,
            age: Number(e.target.value),
        }));
    };

    console.log(user);

    return (
        <>
            <h1>Contact page</h1>
            <form>
                <input
                    className="border-4"
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Age"
                    value={user.age}
                    onChange={handleAgeChange}
                />
            </form>
        </>
    );
};

export default Page;
