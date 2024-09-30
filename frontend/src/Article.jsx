import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/useAgain/Header/Header";
import blockScroll from "./functions/blockScroll";
import MainArticle from "./components/MainArticle/MainArticle";

export default function Article(){
    const { params, id } = useParams();
    const routes = ['informations','actualites'];
    const navigate = useNavigate();
    const [blocked, setBlocked] = useState(false);

    useEffect(()=>{
        blockScroll(blocked)
    },[blocked])

    useEffect(()=>{
        if(!routes.includes(params)){
            navigate("/*");
        }
    },[])

    return (
        <>
          <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>
          <MainArticle/>
        </>   
    )
}