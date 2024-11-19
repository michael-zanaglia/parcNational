import React from "react";
import Footer from "../useAgain/Footer/Footer";

export default function MainArticle(){
    const messages = ["haha", "hihi", "hehe", "hoho"];
    return(
        <div className="mainArticle">
            <h1>Nom Article</h1>
            <div className="divArticle">
                <div className="infoArticle">
                    <div className="articleImg"></div>
                    <h3>Auteur date</h3>
                </div>
                <div className="articleContent">
                    <h1>Titre Accrocheur</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis cupiditate cum 
                    corporis molestiae ab, iusto rerum nemo dolorem voluptas 
                    ut cumque sunt, velit temporibus obcaecati assumenda asperiores officia facilis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis cupiditate cum 
                    corporis molestiae ab, iusto rerum nemo dolorem voluptas 
                    ut cumque sunt, velit temporibus obcaecati assumenda asperiores officia facilis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis cupiditate cum 
                    corporis molestiae ab, iusto rerum nemo dolorem voluptas 
                    ut cumque sunt, velit temporibus obcaecati assumenda asperiores officia facilis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis cupiditate cum 
                    corporis molestiae ab, iusto rerum nemo dolorem voluptas 
                    ut cumque sunt, velit temporibus obcaecati assumenda asperiores officia facilis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis cupiditate cum 
                    corporis molestiae ab, iusto rerum nemo dolorem voluptas 
                    ut cumque sunt, velit temporibus obcaecati assumenda asperiores officia facilis!</p>
                </div>
            </div>
            <div className="divComment">
                <h3>Commentaires</h3>
                <div className="postedMessage">
                    { messages.map((message, index)=>(
                        <div style={{backgroundColor : index % 2 === 0 ? '#55B755' : '#559D53'}}>
                            <p>{message}</p>
                        </div>
                    ))}
                    <form action="" className="formComment">
                        <textarea name="" id=""></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>
            <Footer color={'#292929'} font={'#F7F5F5'}/>
        </div>
    )
}