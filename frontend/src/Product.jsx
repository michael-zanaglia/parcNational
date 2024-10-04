import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/useAgain/Header/Header";
import blockScroll from "./functions/blockScroll";
import MainProduct from "./components/MainProduct/MainProduct";

export default function Product(){
    const mypage = useParams();
    const navigate = useNavigate();

    const [blocked, setBlocked] = useState(false);
    const [products, setProducts] = useState(["circuits", "refuges"]);

    const [allProd, setAllProd] = useState(null);
    const [filterTool, setFilterTool] = useState(null);

    useEffect(()=>{
        if(!products.includes(mypage.params)){
            navigate("/error");
        }
        
        async function fetchData() {
            async function fetching(route) {
                const response = await fetch("http://localhost:8080/api/"+route);
                if(!response.ok){ console.warn("ERREUR DANS LE FETCH");}
                const data = await response.json();
                return data;
            }
            const pData = await fetching("?page="+mypage.params+"&arg="); //Route pour tous les circuits ou refuges
            let placeData = await fetching("?page=&arg=place"); //Route pour tous les placetypes
            console.log(placeData);
            setAllProd(pData);
            setFilterTool(placeData);
        }
    
        fetchData();
        
    },[mypage.params])

    useEffect(()=>{
        blockScroll(blocked)
    },[blocked])
    
    return(
        <>  
            <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>
            {/*<p>mypage.params === "circuits"?"oui":"non"}</p>*/}
            <MainProduct title={mypage.params} datas={allProd || []} filters={filterTool}/>
        </>
    )
}