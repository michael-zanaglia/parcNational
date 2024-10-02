import React, { useState, useRef, useEffect } from "react";
import Footer from "../useAgain/Footer/Footer";
import Infos from "./Infos/Infos";
import Pref from "./Pref/Pref";
import Backlog from "./BackLog/Backlog";
import PasswordModal from "./PasswordModal/PasswordModal";
import { useMediaQuery } from "react-responsive";

export default function MainProfile(){
    const onglets = ['Infos. personnelles', 'Préférences', "Historique d'actions"];
    const [isClicked, setClicked] = useState(0);
    const [isOpen, setIsOpen] = useState(false); 
    const isHigher = useMediaQuery({query : '(min-width:1096px)'});
    
    function changeState(clicked){
        setClicked(clicked);
    }

   
    return (
        <div className="mainProfile">
            {isOpen && <div className="overlayProfile"></div>}
            <h1>Modifier votre profil</h1>
            <div className="editProfile">
                <div className="ongletsProfile">
                    {onglets.map((onglet, index)=>(
                        <div key={onglet} onClick={()=>changeState(index)} style={{
                            borderBottom : index === 0 && isHigher ? '1px solid #F7F5F5' : '',
                            borderTop : index === onglets.length - 1 && isHigher ? '1px solid #F7F5F5' : '', 
                            backgroundColor : index === isClicked ? '#292929' : '', 
                            borderRadius : index === 0 && isHigher  ? '15px 0 0 0' : index === onglets.length - 1 && isHigher ? '0 0 0 15px' : '0'
                        }}>
                            <p>{onglet}</p>
                        </div>  
                    ))}
                </div>
                { isClicked === 0 &&  <Infos setModal={setIsOpen}/> }
                { isClicked === 1 &&  <Pref/> }
                { isClicked === 2 &&  <Backlog/> }
            </div>
            
                
            <PasswordModal modal={isOpen} hideModal={setIsOpen}/>  
                
               
            
            
            <Footer color={'#D9D9D9'} font={'#292929'}/>
        </div>
    )
}