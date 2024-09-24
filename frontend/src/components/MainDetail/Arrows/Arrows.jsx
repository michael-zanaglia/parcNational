import React from "react";

export default function Arrows({ left, right }){

    return(
        <div className="direction">
            <svg onClick={left} xmlns="http://www.w3.org/2000/svg" fill="#292929" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F7F5F5" className="widthSize32">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <svg onClick={right} xmlns="http://www.w3.org/2000/svg" fill="#292929" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F7F5F5" className="widthSize32">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    )
}