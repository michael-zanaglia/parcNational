import React, { useEffect, useState } from "react";
import Header from "./components/useAgain/Header/Header";
import MainTickets from "./components/MainTickets/MainTickets";
import Footer from "./components/useAgain/Footer/Footer";
import blockScroll from "./functions/blockScroll";

export default function MyTickets(){
    const [blocked, setBlocked] = useState(false);
    useEffect(()=>{
        blockScroll(blocked);
    },[blocked])
    return(
        <div className="screenHeightTickets">
            <Header theme={'#D9D9D9'} color={'#292929'} hoverTheme={'#B38F9F'} setBlocked={setBlocked}/>
            <div className="ticketsBody">
                <MainTickets/>
            </div>
            <Footer color={'#D9D9D9'} font={'#292929'}/>
        </div>
    )
}