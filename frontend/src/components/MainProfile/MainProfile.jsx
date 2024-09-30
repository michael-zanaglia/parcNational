import React, { useState } from "react";
import Footer from "../useAgain/Footer/Footer";

export default function MainProfile(){
    const onglets = ['Infos. personelles', 'Préférences', "Historiques d'actions"];
    const [isClicked, setClicked] = useState(0)
    function changeState(clicked){
        setClicked(clicked)
    }
    return (
        <div className="mainProfile">
            <h1>Modifier votre profil</h1>
            <div className="editProfile">
                <div className="ongletsProfile">
                    {onglets.map((onglet, index)=>(
                        <div onClick={()=>changeState(index)} style={{
                            borderBottom : index === 0 ? '1px solid #F7F5F5' : '',
                            borderTop : index === onglets.length - 1 ? '1px solid #F7F5F5' : '', 
                            backgroundColor : index === isClicked ? '#292929' : '', 
                            borderRadius : index === 0 ? '15px 0 0 0' : index === onglets.length - 1 ? '0 0 0 15px' : '0'
                        }}><p>{onglet}</p></div>
                    ))}
                </div>
            </div>
            <Footer color={'#D9D9D9'} font={'#292929'}/>
        </div>
    )
}