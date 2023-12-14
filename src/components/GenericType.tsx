import React, { Dispatch, ReactNode, SetStateAction } from "react";

// defining props type with a constraint on T
type InputValType = string | number;

type PropsType<T extends InputValType> = {
    label: string;
    value: T;
    setter: Dispatch<SetStateAction<T>>;
};

const GenericType = <T extends InputValType>(props: PropsType<T>) => {
    return (
        <>
            <form>
                <label> {props.label}: </label>
                <input 
                    className="border-4" 
                    type="text" 
                    value={props.value} 
                    placeholder="type string or number"
                    onChange={(e)=>props.setter(e.target.value as T)} 
                />
            </form>
        </>
    );
};

export default GenericType;
