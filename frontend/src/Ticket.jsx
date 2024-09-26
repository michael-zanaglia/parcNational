import React, { useState, useEffect } from "react";
import Header from "./components/useAgain/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import blockScroll from "./functions/blockScroll";

export default function Ticket(){
    const [blocked, setBlocked] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const navigate = useNavigate();

    function changeClick(){
        setClicked(true);
    }

    function cancelTicket(){
        // Logique pour supprimer de la bdd  
        sessionStorage.setItem("pop", "true");
        navigate("/vosbillets", {state : { showPopUp : true }});
    }

    useEffect(()=>{
        blockScroll(blocked);
    },[blocked])

    const { id } = useParams();

    return (
        <div className="ticketPage">
            <Header theme={'#D9D9D9'} color={'#292929'} hoverTheme={'#B38F9F'} setBlocked={setBlocked}/>
            <div className="ticketSection">
                <div className="cancelTicket" style={{ transform : isClicked ? 'translateX(30vw)':'translateX(0)' }}>
                    <h1>{isClicked ? "Votre billet": "En etes-vous sur ?"}</h1>
                    <div className="champTextTicket">
                        
                            <p className={!isClicked ? "leftText" : "rightText"}>
                                • Vous pouvez annuler votre billet et ainsi etre éligible au remboursement sous réservation de 48h avant l'heure de visite.    
                            </p> 
                            <p className={isClicked ? "leftText" : "rightText"}>
                                • En annulant ce billet vous ne serez pas remboursé.
                            </p> 
        
                    </div>
                    
                    {!isClicked ? <button onClick={changeClick}>Annuler votre billet</button> : <button onClick={cancelTicket}>Annuler votre billet</button>}
                </div>
                <div className="qrBanner" style={{ transform : isClicked ? 'translateX(-70vw)':'translateX(0)' }}>
                    <div>
                        <div className="qrCode">
                        </div>   
                        <p>billet</p>
                    </div>
                    <div className="contentTicket">
                        <p>{id}</p>
                        <p>{id}</p>
                        <p>{id}</p>
                        <p>{id}</p>
                    </div>
                    <p className="boughtTicketTime">Acheté le</p>
                </div>
            </div>
        </div>
    )
}