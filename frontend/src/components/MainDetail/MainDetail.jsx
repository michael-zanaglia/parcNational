import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";
import Arrows from "./Arrows/Arrows";
import CursorSlider from "./CursorSlider/CursorSlider";
import { useMediaQuery } from "react-responsive";

export default function MainDetail(){
    const [flipped, setFlipped] = useState(false);
    const isLowerThan = useMediaQuery({query:'(max-width: 1190px)'});

    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(["i1", "i2", "i3"]);
    function animationSwitching(){
        setFlipped(true);
    }

    function diapoSwitchToNext(){
        setIndex(index => {
            return index === images.length -1 ? 0 : index + 1;
        })
        
    }
    function diapoSwitchToPrev(){
        setIndex(index => {
            return index === 0 ? images.length - 1 : index - 1;
        })
    }
    function switchImage(newIndex){
        setIndex(newIndex);
    }
    
    return (
        <main className="bodyProduct">
            <div className="mainProduct pp">
                <div id="frameDetail">
                    <h1>DETAIL TITLE</h1>
                    <div className="caseDetail">
                        <div className="detailDesc" style={flipped && !isLowerThan ? {transform : 'translateX(100%)' } : {transform : 'translateX(0%)' }}>
                            <div className="textDetail" style={flipped ? {display : 'none'} : {display : 'flex'}}>
                                <div>
                                    <p>DETAIL DESCRIPTION</p>
                                </div>
                                <button onClick={animationSwitching}>Réserver</button>
                            </div>
                            <div className="caseFormDetail" style={flipped ? {display : 'block'} : {display : 'none'}}>
                                <form action="">
                                    <label htmlFor="">Resa Form</label>
                                    <input type="text" />
                                </form>
                            </div>
                        </div>
                        <div className="detailImg" style={flipped && !isLowerThan ? {transform : 'translateX(-100%)' } : {transform : 'translateX(0%) '}}>
                            <div className="caseImgDetail">
                                <div className="overlayDetail"></div> 
                                    { images.length > 1 && 
                                        <>                                    
                                            <Arrows left={diapoSwitchToPrev} right={diapoSwitchToNext}/> 
                                            <CursorSlider images={images} switchImage={switchImage} index={index} />         
                                        </>
                                    }
        
                                    {
                                        images.map((img)=>(
                                            <div key={img} className={"imgDetailItem " + img} style={{transform : `translateX(${-100 * index}%)`}}>
                                                {img}
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer color={'#559D53'} font={'#F7F5F5'}/>
            </div> 
        </main>
        

    )
}