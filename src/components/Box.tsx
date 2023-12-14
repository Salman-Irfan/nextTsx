import React, { ReactNode } from "react";

// defining props type
type PropsType = {
    heading: string;
    children: ReactNode;
};

// box component
const Box = (props: PropsType) => {
    return (
        <>
            <h1>{props.heading}</h1>
            <p>{props.children}</p>
        </>
    );
};

export default Box;
