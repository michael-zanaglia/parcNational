import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";
import FilterProduct from "./FilterProduct/FilterProduct";
import { Link } from "react-router-dom";

export default function MainProduct({ title, datas }){
    const [dDatas, setDatas] = useState(null);

    useEffect(()=>{
        setDatas(datas);
    },[datas])
    

    return(
        <body className="bodyProduct">
            <main className="mainProduct">
                <div id="frame">
                    <h1>Les {title}</h1>
                    <FilterProduct/>
                    <div id="productCards">
                        {dDatas ? (dDatas.map((data)=>(
                            <Link to={'/tourisme/'+ title + '/' + (title === "circuits" ? data.id_circuit : data.id_camping)}>
                                <div key={title === "circuits" ? data.id_circuit : data.id_camping} className="productCard">
                                    <div className="productCardImg"><img src={data.photos.split('\n')[0]} alt="photo-card" /></div>
                                    <p>{data.nom}</p>
                                </div>
                            </Link> 
                            )   
                        )) : (<p>error</p>) }
                    </div>
                    
                </div> 
                <Footer color={'#292929'} font={'#F7F5F5'}/>
            </main>
        </body>
            
    )
}