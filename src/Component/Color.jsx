import React, { useState } from "react";

export function Color(){
    const [color,setColor]=useState("red");
    return(
        <>
            <div className="w-full h-screen" 
                style={{backgroundColor:color}}>
                    <div className="flex flex-col h-screen items-center ">
                        <h1 className="text-white max-md:text-[5rem] font-[Arial Black] font-bold text-[10rem]">HELLO</h1>
                        <h1 className="text-white max-md:text-[4rem] font-[Arial Black] font-bold text-[9.4rem]">This is <span 
                        className="uppercase">{color}</span> color</h1>
                    </div>
                    
                </div>
            <div className="bg-white w-4/5 fixed flex flex-wrap mx-[10%] justify-center bottom-12
            inset-x-0 px-2 gap-3 py-2 rounded-xl">

                <button
                    onClick={()=>setColor("red")} 
                    className="bg-[red] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Red</button>
                <button
                    onClick={()=>setColor("green")}  
                    className="bg-[green] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Green</button>
                <button 
                    onClick={()=>setColor("yellow")} 
                    className="bg-[yellow] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Yellow</button>
                <button
                    onClick={()=>setColor("orange")}  
                    className="bg-[orange] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Orange</button>
                <button 
                    onClick={()=>setColor("cyan")} 
                    className="bg-[cyan] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Cyan</button>
                <button 
                    onClick={()=>setColor("Black")} 
                    className="bg-[black] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Black</button>
                <button 
                    onClick={()=>setColor("purple")} 
                    className="bg-[purple] outline-none text-white px-3 py-1 rounded-lg
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-bold"
                >Purple</button>
            </div>
        </>
    )
}