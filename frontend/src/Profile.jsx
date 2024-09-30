import React, { useState, useEffect } from "react";
import Header from "./components/useAgain/Header/Header";
import MainProfile from "./components/MainProfile/MainProfile";
import blockScroll from "./functions/blockScroll";

export default function Profile(){
    const [blocked, setBlocked] = useState(false);
    useEffect(()=>{
        blockScroll(blocked);
    },[blocked])
    return (
        <>
            <Header theme={'#D9D9D9'} color={'#292929'} hoverTheme={'#B38F9F'} setBlocked={setBlocked}/>
            <MainProfile/>
        </>
    )
}