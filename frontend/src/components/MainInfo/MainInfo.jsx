import React, { useEffect, useState } from "react";
import Footer from "../useAgain/Footer/Footer";


export default function MainInfo(){
    const [onglet, setOnglet] = useState(true);
    const [view, setView] = useState(localStorage.getItem("view") === "false" ? false : true);
    const articles = ['art1','art2','art3','art4','art5','i6', 'i7','i8'];
    const annonces = ['ann1','ann2','ann3','ann4','ann5','i6', 'i7','i8'];
    function changeOnglet(bool){
        setOnglet(bool);
    }
    function changeView(bool){
        setView(bool);
    }
    useEffect(()=>{
        localStorage.setItem("view", view.toString());
        console.log(view, "actuellement")
    },[view])

    return(
        <div className="mainInfo">
            <div className="pageInfo">
                <h1 className="titrePageInfo">Informations</h1>
                <div className="infoFilter">
                    <div className="infOnglets">
                        <div className="ann" onClick={()=>changeOnglet(true)} style={{backgroundColor : onglet ? '#448c42':'', color : onglet ? '#F7F5F5':''}}><h3>Annonces</h3> </div>
                        <div className="act" onClick={()=>changeOnglet(false)} style={{backgroundColor : !onglet ? '#448c42':'', color : !onglet ?'#F7F5F5':'' }}><h3>Actualités</h3> </div>
                    </div>
                    <div className="filterOptions">
                        <div className="filterOptionsLeft">
                            <label htmlFor="search">Rechercher :</label>
                            <input type="search" name="search"/>
                        </div>
                        <div className="filterOptionsRight">
                            <div>
                                <p>Vue :</p>
                                <button onClick={()=>changeView(true)} style={{color : view ? '#f7f5f5' : '' }}>liste</button>
                                <button onClick={()=>changeView(false)} style={{color : !view ? '#f7f5f5' : '' }}>gallerie</button>
                            </div>
                            <select name="" id="">
                                <option value="">Trier par V</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`infoContent ${view ? 'liste' : 'gal'}`}>
                    {onglet ? articles.map((art, index)=>(
                        <div key={art} className="infoItem" style={{width : view ? '75%' : "40%"}}>
                            <div className="overlayInfo"></div>
                            <div className="itemImg"></div>
                            <div className="itemText">
                                <h1>Titre Article</h1>
                                <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum tempore similique facere exercitationem quod eaque nobis! Hic, reprehenderit assumenda enim nam numquam quas. Error rerum ullam illum voluptatum vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum tempore similique facere exercitationem quod eaque nobis! Hic, reprehenderit assumenda enim nam numquam quas. Error rerum ullam illum voluptatum vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum tempore similique facere exercitationem quod eaque nobis! Hic, reprehenderit assumenda enim nam numquam quas. Error rerum ullam illum voluptatum vel!</p></div>
                                <p className="auteur">Ecrit par XXX le x-x-xxx</p>
                            </div>
                        </div>
                    )): annonces.map((ann, index)=>(
                        <div key={ann} className="infoItem" style={{width : view ? '75%' : "40%"}}>
                            <div className="overlayInfo"></div>
                            <div className="itemImg"></div>
                            <div className="itemText">
                                <h1>Titre Article</h1>
                                <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum tempore similique facere exercitationem quod eaque nobis! Hic, reprehenderit assumenda enim nam numquam quas. Error rerum ullam illum voluptatum vel!</p></div>
                                <p className="auteur">Ecrit par XXX le x-x-xxx</p>
                            </div>
                        </div>))} 
                </div>
            </div>
            <Footer color={'#292929'} font={'#F7F5F5'}/>
        </div>
    )
}