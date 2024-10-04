import React, { useEffect, useRef, useState } from "react";

export default function FilterProduct({ filters, changeDts, setSelectVal, setSearchVal }){
    const [selected, setSelected] = useState(3);
    const select = useRef();
    const searching = useRef();
    
    function selectFilter(){
        setSelectVal(select.current.value);
    }
    function searchFilter(){
        setSearchVal(searching.current.value);
    }

    function changeState(clicked){
        setSelected(clicked);
    }
    
    useEffect(()=>{
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
                    <select ref={select} onChange={selectFilter} name="options">
                        <option value="none">---</option>
                        <option value="status">Lieux ouverts</option>
                        <option value="asc">Prix croissant</option>
                        <option value="desc">Prix décroissant</option>
                        <option value="order">A-Z ↓</option>
                    </select>   
                </div>
                 
                <input ref={searching} onChange={searchFilter} type="text" placeholder="Recherche..." name="research"/>
            </div>
        </div>
    )
}