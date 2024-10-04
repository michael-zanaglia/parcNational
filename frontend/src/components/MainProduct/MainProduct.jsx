import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";
import FilterProduct from "./FilterProduct/FilterProduct";
import { Link } from "react-router-dom";

export default function MainProduct({ title, datas, filters }){
    const [dDatas, setDatas] = useState(null);
    const [fixedDatas, setFixedDatas] = useState(null)
    const [chageDDatas, setChangeDDatas] = useState(null);
    useEffect(()=>{
        setDatas(datas);
        setFixedDatas(datas);
        console.log(datas)
    },[datas])

    useEffect(()=>{
        if(chageDDatas){
            if(chageDDatas !== 4){
                let newList = fixedDatas.filter((el)=>el.id_placetype === chageDDatas);
                console.log("ne", newList)
                setDatas(newList);
            } else {
                setDatas(fixedDatas);
                console.log("j'envoie", fixedDatas)
            }
        }
        
    },[chageDDatas])
    

    return(
        <div className="bodyProduct">
            <main className="mainProduct">
                <div id="frame">
                    <h1>Les {title}</h1>
                    <FilterProduct filters={filters} changeDts={setChangeDDatas}/>
                    <div id="productCards">
                        {dDatas ? (dDatas.map((data)=>(
                            <Link to={'/tourisme/'+ title + '/' + (title === "circuits" ? data.id_circuit : data.id_camping)} key={title === "circuits" ? data.id_circuit + 'circuits' : 'refuges' + data.id_camping} >
                                <div className="productCard">
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
        </div>
            
    )
}