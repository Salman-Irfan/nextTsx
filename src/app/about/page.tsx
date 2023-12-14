"use client";
import GenericType from "@/components/GenericType";
import React, { useState } from "react";

const page = () => {
    const [val, setVal] = useState<string>("");
    console.log(val);
    return (
        <>
            <h1>about page</h1>
            <GenericType label="About" value={val} setter={setVal} />
        </>
    );
};

export default page;
