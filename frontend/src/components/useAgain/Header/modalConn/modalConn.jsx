import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ModalConn({ isClicked, stateChange, color, func, conn, setConn }){
    const [pathD, setPathD] = useState("M14.765 6.076a.5.5 0 0 1 .159.689a9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53a8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159");
    const [inpType, setInpType] = useState(false);
    const moduleRef = useRef(null);
    const form = useRef();
    const [myPop, setPop]  = useState(null);
    console.log("coonnn", conn)

    function logOut(e){
        e.preventDefault()
        const checkConnexion = async ()=>{
            const response = await fetch("http://localhost:8080/php/actions/logout.php");
            if(!response.ok){console.warn("Erreur de fetch pour la deconnexion");}
            return {success : false}; 
 
        }

        (async()=>{
            const result = await checkConnexion();
            stateChange();
            setConn(false)
        })();
    }

    function logIn(e){
        e.preventDefault();
        console.log(form.current);
        const formData = new FormData(form.current);
        console.log(formData);

        const options = {
            method : "POST",
            body : formData
        }

        const checkConnexion = async ()=>{
            try {
                const response = await fetch("http://localhost:8080/php/actions/login.php", options);
                if(!response.ok){console.warn("Erreur de fetch pour la connexion");}
                const data = await response.json();
                return data; 
            } catch (error) {
                console.warn("CONNEXION", error)
                return {success : false};
            }
            
        }

        (async()=>{
            const result = await checkConnexion();
            setPop(result.success)
            setTimeout(removePopUp, 3000)
            if(result.success){
                func();
            }
            stateChange();
            
        })();
    }

    function removePopUp(success){
        setPop(null);
        
    }
    
    function clickCloseElement(){
        stateChange();
    }

    function changeInpPwdToText(){
        if (pathD === "M14.765 6.076a.5.5 0 0 1 .159.689a9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53a8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159"){
            setPathD("M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11m0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3m0 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
            
        } else {
            setPathD("M14.765 6.076a.5.5 0 0 1 .159.689a9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53a8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159")
            
        }
        setInpType(!inpType);
    }

    function absoluteClose(event){
        if(moduleRef.current && !moduleRef.current.contains(event.target)){
            stateChange();
        }
    }
    useEffect(() => {
        if(isClicked){
            document.addEventListener("mousedown", absoluteClose);
        }
        return () => {
            document.removeEventListener("mouseup", absoluteClose);
        };
    }, [isClicked]);

    return (
        <>
            <div ref={moduleRef} className={`moduleConn ${isClicked? "show" : "hide"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="widthSize32 close" onClick={clickCloseElement}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                
                {conn ?(

                    <div className="userBar">
                        <Link to='/profile'>
                            <div className="profile">Mon profile</div>
                        </Link>
                        <button onClick={logOut} type='submit' className="deco">Se deconnecter</button>
                    </div> 
                    

                ) : ( 
                    <form ref={form} onSubmit={logIn} >
                        <label htmlFor="username">Pseudo</label>
                        <input type="text" name="username" required/>

                        <label htmlFor="password">Mot de passe</label>
                        <input className="pwdInp" name="password" type={!inpType ? "password" : "text"} required/>   
                        <svg onClick={changeInpPwdToText} className="viewPwd" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="24px" height="24px">
                            <path fill="#f7f5f5" fillRule="evenodd" d={pathD} clipRule="evenodd"/>
                        </svg>
                        <button type='submit' className="conn">Se connecter</button>
                        <p className="redirectSignIn">Vous n'êtes pas inscrit</p>
                    </form>
                )}
            </div>
            <div className={`popUpMyTickets ${ myPop !== null ? "showPop" : "hidePop"}`}>
                <p>{myPop === true ? "Connexion Réussie" : myPop === false ? "Connexion Echouée" : ''}</p>
            </div>
        </>
    )
}