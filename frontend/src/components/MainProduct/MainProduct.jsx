import React from "react";
import Footer from "../useAgain/Footer/Footer";
export default function MainProduct({ title }){
    const test = ['1','2','3','4','5','6','7','8','9','10'];
    return(
        <body className="bodyProduct">
            <main className="mainProduct">
                <div id="frame">
                    <h1>Les {title}</h1>
                    <div>Filter</div>
                    <div id="productCards">
                        {test.map((card)=>(
                            <div key={card} className="productCard">
                                <div className="productCardImg">Img</div>
                                <p>{card}</p>
                            </div>    
                        ))}
                    </div>
                    
                </div> 
                <Footer color={'#292929'} font={'#F7F5F5'}/>
            </main>
        </body>
            
    )
}