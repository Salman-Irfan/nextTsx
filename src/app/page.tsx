"use client"
import Box from "@/components/Box";
import GenericType from "@/components/GenericType";

export default function Home() {
    let a = 5
    console.log(a);
    const updateNumber = () => {
        a++
        console.log(a)
    }
    return (
        <>
        {a}
        <button onClick={updateNumber}>Update a</button>
            <h1>Hello Type Script</h1>
            <Box heading="Box Component in page.tsx" >
                <p>this all is children of box</p>
            </Box>
            {/* generic type form */}
            <GenericType label="Search" value={""} onChange={()=>{console.log("input change func called")}} />
        </>
    );
}
