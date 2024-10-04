import React, { useEffect, useState } from "react";

export default function FilterProduct({ filters, changeDts }){
    const [selected, setSelected] = useState(3);
    const [f, setF] = useState(null);

    function changeState(clicked){
        setSelected(clicked);
    }
    
    useEffect(()=>{
        console.log(selected + 1)
        changeDts(selected+1);
    },[selected])

    return(
        <div className="filterProduct">
            <div className="ongletsProduct">
                {filters && filters.map((filter, index) =>(
                    <div onClick={()=>changeState(index)} key={filter.placetype || 'all'} style={{borderRadius : index === 0 ? '10px 0 0 0' : index === filters.length -1 ? '0 10px 0 0':'0', backgroundColor : selected === index ? '#559D53' : ''}}>
                        {filter.placetype || filter}
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