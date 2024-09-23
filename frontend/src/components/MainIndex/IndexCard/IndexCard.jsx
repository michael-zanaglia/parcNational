import React, { useEffect, useRef } from "react";
import Observer from "../../functions/observer";
export default function IndexCard(){

    const cardsRef = useRef();

    useEffect(()=>{
        Observer(cardsRef);
    },[]);

    return (
        <div ref={cardsRef} className="twoCards">
            <div style={{backgroundColor:'#292929',height:'50px', width:'100%'}}>
                <h3>TITRE</h3>
            </div>
            IMG
        </div>
    )
}