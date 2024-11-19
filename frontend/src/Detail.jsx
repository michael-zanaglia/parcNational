import React, { useEffect, useState } from "react";
import Header from "./components/useAgain/Header/Header";
import MainDetail from "./components/MainDetail/MainDetail";
import { useParams, useNavigate } from "react-router-dom";
import blockScroll from "./functions/blockScroll";

export default function Detail(){
    const { params, id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState(["circuits", "refuges"]);
    const [blocked, setBlocked] = useState(false);
    
    useEffect(()=>{
        console.log(params, id);
        if(!products.includes(params)){
            navigate("/error"); 
        }
    },[])
    useEffect(()=>{
        blockScroll(blocked)
    },[blocked])
    
    return(
        <>
            <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>  
            <MainDetail/>
        </>
    )
}