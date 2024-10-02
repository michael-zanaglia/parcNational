import React, { useState } from "react";
import PasswordModal from "../PasswordModal/PasswordModal";

export default function Infos({ setModal }){
    const [url, setUrl] = useState(null);
    function showPFP(e){
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file)
        if(file){
            const val = URL.createObjectURL(file);
            setUrl(val);
        }
    }
    function showModal(){
        setModal(true);
    }
    return(
        <form action="" className="formProfile">
            <fieldset>
                <legend>Changer la photo de profil</legend>
                    <div className="renderPhoto">
                        {url && <img src={url} alt="pfp" />}
                    </div>
                    <div style={{width:'25vw'}}>
                        <input className="fileInp" type="file" onChange={showPFP}/>    
                    </div>
                    
            </fieldset>
            <div className="champsProfile">
                <label htmlFor="username">Pseudo :</label>
                <input type="text" className="inp" name="username" required/>
                <label htmlFor="firstname">Prénom :</label>
                <input type="text" className="inp" name="firstname" required/>
                <label htmlFor="lastname">Nom :</label>
                <input type="text" className="inp" name="name" required/>
                <label htmlFor="genre">Email :</label>
                <input type="email" className="inp" name="email" required/>
                <label htmlFor="gender">Genre :</label>
                <div className="genreInp">
                    <span>Homme</span>
                    <input type="radio" value='h' name="gender"/>
                    <span>Femme</span>
                    <input type="radio" value='f' name="gender"/>
                </div>
                <input onClick={showModal} type="button" className="inp" value='Modifier le mot de passe'/>
            </div>
            <button>Enregistrer</button>
        </form>
    )
}