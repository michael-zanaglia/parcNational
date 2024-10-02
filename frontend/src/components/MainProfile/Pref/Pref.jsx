import React from "react";

export default function Pref(){
    return(
        <form className="localStorageForm" action="">
            <fieldset className="listeRadio">
                <legend>Vue des articles</legend>
                <span>Liste</span>
                <input type="radio" name="art1" value='liste' defaultChecked/>
                <label htmlFor="art2"></label>
                <span>Gallerie</span>
                <input type="radio" name="art1" value='gallerie'/>    
            </fieldset>
                    
        </form>
    )
}