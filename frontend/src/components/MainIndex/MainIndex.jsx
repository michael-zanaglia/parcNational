import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";
import Header from "../useAgain/Header/Header";
import IndexCard from "./IndexCard/IndexCard";
import blockScroll from "../../functions/blockScroll";

export default function MainIndex(){
    const [blocked, setBlocked] = useState(false);
    const [indexPhoto, setIndexPhoto] = useState(null);
    const [myCards, setCards] = useState([]);
    const cards = ["Circuits", "Refuges", "Informations"];
    
    useEffect(()=>{
        blockScroll(blocked)
    },[blocked])

    useEffect(()=>{

        async function fetchData() {
            async function fetching(route) {
                const response = await fetch("http://localhost:8080/api/"+route);
                if(!response.ok){ console.warn("ERREUR DANS LE FETCH");}
                const data = await response.json();
                console.log("prod : ", data)
                return data;
            }
            const iPData = await fetching("?page=index&arg=wallpaper"); //Route pour la photo d'acceuil
            const cCData = await fetching("?page=index&arg=camping"); // Route pour card Camping
            const cCiData = await fetching("?page=index&arg=circuit"); // Route pour card Circuit
            const cIData = await fetching("?page=index&arg=info"); // Route pour card Informations
            setIndexPhoto(iPData); 
            setCards([cCData, cCiData, cIData]);    
        }

        fetchData();

    },[])
    return(
        <main className="mainIndex">
            <div className="indexItems first">
                <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'} setBlocked={setBlocked}/>
                <div className="image"><img src={indexPhoto} alt="wallpaper" /></div>
            </div>

            <div className="indexItems two">
                <h1>Découvrir le Parc du Mercantour</h1>  
                <div className="cards">
                    {cards.map((card,index)=>(
                        <IndexCard key={card + index} card={myCards[index]} titre={cards[index]} />
                    ))}
                </div>   
            </div>

            <div className="indexItems three">
                <h1>Nous trouver</h1>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.0911638686057!2d7.06283777586768!3d44.163980519246174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdaf6678af879d%3A0xcabc15aee7b89386!2sParc%20national%20du%20Mercantour!5e0!3m2!1sfr!2sfr!4v1727092323248!5m2!1sfr!2sfr"  height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Footer color={'#292929'} font={'#F7F5F5'}/>
            </div>
        </main>
    )
}