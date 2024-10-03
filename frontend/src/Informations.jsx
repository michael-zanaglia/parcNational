import React, { useState, useEffect } from "react";
import Header from "./components/useAgain/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import blockScroll from "./functions/blockScroll";


export default function Informations(){
    const [blocked, setBlocked] = useState(false);
    useEffect(()=>{
        blockScroll(blocked);
    },[blocked])
    return(
        <>
            <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>
            <MainInfo/>
        </>
    )
}