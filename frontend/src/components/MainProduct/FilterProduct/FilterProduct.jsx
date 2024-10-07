import React, { useState } from "react";

export default function FilterProduct(){
    const testfilter = ['1','2','3'];
    const [selected, setSelected] = useState(0);
    function changeState(clicked){
        setSelected(clicked);
    }
    return(
        <div className="filterProduct">
            <div className="ongletsProduct">
                {testfilter.map((filter, index) =>(
                    <div onClick={()=>changeState(index)} key={filter+'**'} style={{borderRadius : index === 0 ? '10px 0 0 0' : index === testfilter.length -1 ? '0 10px 0 0':'0', backgroundColor : selected === index ? '#559D53' : ''}}>
                        {'type'+filter}
                    </div>
                ))}
            </div>
            <div className="formProduct">
                <div style={{ display:'flex', gap:'10px', justifyContent:'center', alignItems:'center', marginLeft:'1%', width:'30%' }}>
                    <p>Filtrer par :</p>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>   
                </div>
                 
                <input type="text" placeholder="Recherche..." />
            </div>
        </div>
    )
}