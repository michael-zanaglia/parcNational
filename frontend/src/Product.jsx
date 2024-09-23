import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/style.css"
import "./styles/product.css"
import Header from "./components/useAgain/Header/Header";
import blockScroll from "./functions/blockScroll";
import MainProduct from "./components/MainProduct/MainProduct";

export default function Product(){
    const mypage = useParams();
    const navigate = useNavigate();

    const [blocked, setBlocked] = useState(false);
    const [products, setProducts] = useState(["circuits", "refuges"]);

    useEffect(()=>{
        if(!products.includes(mypage.params)){
            navigate("/error");
        }
    },[])
    useEffect(()=>{
        blockScroll(blocked)
    },[blocked])
    
    return(
        <>  
            <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>
            {/*<p>mypage.params === "circuits"?"oui":"non"}</p>*/}
            <MainProduct title={mypage.params}/>
        </>
    )
}