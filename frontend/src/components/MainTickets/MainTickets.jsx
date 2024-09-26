import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainTickets(){
    const [myOrder, setMyOrder] = useState([]);
    const [myPop, setMyPop] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        setMyOrder(["or1","or2","or3","or4","or5"]);
    },[])

    useEffect(()=>{
        if(location.state && location.state.showPopUp && sessionStorage.getItem("pop")){
            setMyPop(true);
            setTimeout(showWindow, 3000);
        }
    },[location.state])

    function showWindow(){
        setMyPop(false);
        sessionStorage.removeItem("pop");
    }
    function navToTicket(){
        navigate("/vosbillets/:id");
    }
    return (
        <div className="ticketsMain">
            <h1>Vos Billets</h1>
            <div className="ordersMain">
                {
                    myOrder.map((el, index)=>(
                        <div key={el} onClick={navToTicket} className="elementOrderTickets" style={{ backgroundColor : index % 2 !== 0 ? '#499547' : '#559D53' }}>
                            <p>{el}</p>
                        </div>
                    ))
                }
            </div>
            <div className={`popUpMyTickets ${ myPop ? "showPop" : "hidePop"}`}>
                Votre billet à bien ete annuler.
            </div>
        </div>
    )
}