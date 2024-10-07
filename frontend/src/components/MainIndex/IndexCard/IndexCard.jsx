import React, { useEffect, useRef } from "react";
import Observer from "../../../functions/observer";
import { Link } from "react-router-dom";

export default function IndexCard({ card, titre }){
    const cardsRef = useRef();
    const tourismePage = ["Circuits", "Refuges"];

    useEffect(()=>{
        Observer(cardsRef);
    },[]);

    function goToMyPage(){
        let path;
        if(tourismePage.includes(titre)){
            path = '/tourisme/'+titre.toLowerCase();
        } else if(titre === "Informations"){
            path = '/'+titre.toLowerCase();
        }
        return path;
    }

    return (
        <Link to={goToMyPage()}>
            <div ref={cardsRef} className="twoCards">
                <div style={{backgroundColor:'#292929',height:'50px', width:'100%'}}>
                    <h3>{titre}</h3>
                </div>
                {card && <img src={Object.keys(card).length > 0 ? card : ""} alt={Object.keys(card).length > 0 ?  "img" : "error"} />}
            </div>
        </Link>
    )
}