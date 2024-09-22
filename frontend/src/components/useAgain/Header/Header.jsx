import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ModalConn from "./modalConn/modalConn";

export default function Header({ theme, color, hoverTheme }){
    const isHeightScreen  = useMediaQuery({query: '(min-width : 781px)'});

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedMob, setIsClickedMob] = useState(false);
    
    function mouseOverElement(){
        setIsHovered(!isHovered);
    }
    function clickOpenElement(){
        setIsClicked(true);
    }
    function modalStateChange(){
        setIsClicked(false);
    }
    function clickMobileElement(){
        setIsClickedMob(!isClickedMob);
    }

    document.documentElement.style.setProperty("--mainTheme", theme);
    document.documentElement.style.setProperty("--colorTheme", color);
    document.documentElement.style.setProperty("--hoverTheme", hoverTheme);
   
    return(
        <>
        <header>
            <nav>
                <ul className="mainBar">
                    {
                        !isHeightScreen && 
                        <svg onClick={clickMobileElement} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="widthSize32">
                            <path strokeLinecap="round" strokeLinejoin="round" d={isClickedMob?"M6 18 18 6M6 6l12 12":"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                        </svg>
                    }   
                    <section><a href="#"><img className="widthSize96 logo" src="/src/assets/logo.png" alt="logo" /></a></section>
                    {isHeightScreen && <div>
                        <div className="liBox">
                            <a href="#">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="widthSize32 admin">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </li>
                            </a>
                        </div>
                        <div className="liBox" onMouseEnter={mouseOverElement} onMouseLeave={mouseOverElement}>
                           <li className="tapis">Tourisme</li> 
                           { isHovered &&   <div className="subNavBar">
                                                <div className="subLiBox"><a href="#"><li>Circuits</li></a></div>
                                                <div className="subLiBox"><a href="#"><li>Refuges</li></a></div>
                                            </div> 
                            }
                        </div>
                        <div className="liBox"><a href="#"><li>Informations</li></a></div>
                        <div className="liBox"><a href="#"><li>Vos billets</li></a></div>
                        <div className="liBox">
                            <a href="#" onClick={clickOpenElement}>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="widthSize32 user">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </li> 
                            </a>
                            <ModalConn isClicked={isClicked} stateChange={modalStateChange} color={color}/>
                        </div>
                                
                    </div>}  
                </ul>
                {!isHeightScreen &&
                <div className={`subBar ${isClickedMob?"showMobile":""}`}>
                    <div className="liBox"><a href="#"><li>Admin</li></a></div>
                    <div onMouseEnter={mouseOverElement} onMouseLeave={mouseOverElement} className="liBox">
                        <li>Tourisme ▼</li>
                        {
                            isHovered &&
                            <>
                                <div className="subMobTourisme">
                                    <div className="subLiBox"><a href="#"><li>Circuits</li></a></div>
                                    <div className="subLiBox"><a href="#"><li>Refuges</li></a></div>
                                </div> 
                            </>
                        }
                    </div>
                    <div className="liBox"><a href="#"><li>Informations</li></a></div>
                    <div className="liBox"><a href="#"><li>Vos billets</li></a></div>
                    <div className="liBox">
                        <a onClick={clickOpenElement}><li>Connexion</li></a>
                        <ModalConn isClicked={isClicked} stateChange={modalStateChange} color={color} />
                    </div>
                </div>}
            </nav>
            {!isHeightScreen && isClicked && <div className="overlay"></div>}
        </header>
        
        </>
    )
}