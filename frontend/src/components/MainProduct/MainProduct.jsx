import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";
import FilterProduct from "./FilterProduct/FilterProduct";
import { Link } from "react-router-dom";

export default function MainProduct({ title, datas, filters }){
    const [dDatas, setDatas] = useState(null); // Les valeurs de base qui represent la vue du front
    const [fixedDatas, setFixedDatas] = useState(null) // Les valeurs de base qui ne changeront jamais
    const [changeDDatas, setChangeDDatas] = useState(null); // Les valeurs de base en fonction des placetype
    const [selectValue, setSelectValue] = useState(null); // Les valeurs de base en fonction du select 
    const [searchValue, setSearchValue] = useState(null); // Les valeurs de base en fonction de la recherche

    function applyFilter(){
        // la liste filtrée dependra de mes données immuable. A chaque changement d'une des trois dep, la fonction s'activera et recommencera du debut
        // mais toujours avec des données actuelles.
        let newList = fixedDatas;

        if(changeDDatas && changeDDatas !==4){
            newList = newList.filter((el)=>el.id_placetype === changeDDatas); // Les onglets definiront ma liste
        }

        if(searchValue){
            newList = newList.filter((el)=>el.nom.includes(searchValue)); // je compare mon input aux noms dans la liste defini par l'onglet selectionné
        }

        if(selectValue){ // Je defini une liste plus affinée.
            if(selectValue === "status"){
                newList = newList.filter((el)=>el.id_status === 1);
            } 
            else if(selectValue === "order"){
                newList = newList.filter((el)=>el.nom).sort((a,b)=>a.nom>b.nom);
            }else if(selectValue === "asc"){
                newList = newList.sort((a,b)=>Number(a.price)>Number(b.price));
            }else if(selectValue === "desc"){
                newList = newList.sort((a,b)=>Number(a.price)<Number(b.price));
            }
        }

        setDatas(newList);

    }

    useEffect(()=>{
        setDatas(datas);
        console.log("PLACEDATA", datas)
        //setPrevF(datas);
        setFixedDatas(datas);
    },[datas])

    useEffect(()=>{
        applyFilter();
    },[changeDDatas, searchValue, selectValue])

    

    return(
        <div className="bodyProduct">
            <main className="mainProduct">
                <div id="frame">
                    <h1>Les {title}</h1>
                    <FilterProduct filters={filters} changeDts={setChangeDDatas} setSelectVal={setSelectValue} setSearchVal={setSearchValue}/>
                    <div id="productCards">
                        {dDatas ? (dDatas.map((data, index)=>{
                            const uniqueKey = title === "circuits" ? (data.id_circuit ? `${data.id_circuit}-circuits` : `index-${index}`) 
                                                                    : (data.id_camping ? `${data.id_camping}-refuges` : `index-${index}`);

                            return (<Link to={'/tourisme/'+ title + '/' + (title === "circuits" ? data.id_circuit : data.id_camping)} key={uniqueKey} >
                                <div className="productCard">
                                    <div className="productCardImg"><img src={data.photos.split('\n')[0]} alt="photo-card" /></div>
                                    <p>{data.nom}</p>
                                </div>
                            </Link> )
                        }   
                        )) : (<p>error</p>) }
                    </div>
                    
                </div> 
                <Footer color={'#292929'} font={'#F7F5F5'}/>
            </main>
        </div>

    )
}

// ROUTE POUR REFUGE/CIRCUIT ET POUR ID