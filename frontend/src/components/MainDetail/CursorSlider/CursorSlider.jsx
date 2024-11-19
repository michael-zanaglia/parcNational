import React from "react";

export default function CursorSlider({ images, switchImage, index }){

    return(
        <div className="btnCursor">
            {
                images.map((imgs, i)=>(
                    <button onClick={()=>switchImage(i)} key={imgs+i} style={{
                        width: '0.7rem',
                        height: '0.7rem',
                        backgroundColor: index === i ? '#559D53' : '#292929',
                        border: '1px solid #F7F5F5',
                        borderRadius: '50%'}}></button>
                ))
            }
        </div>
    )
}