import React, { useRef, useEffect } from "react";

export default function PasswordModal({ hideModal, modal }){
    function closeModal(){
        hideModal(false);
    }
    const modalRef = useRef(null);

    function absoluteClose(event){
        if(modalRef.current && !modalRef.current.contains(event.target)){
            hideModal(false);
        }
    }
    useEffect(() => {
        if(modal){
            document.addEventListener("mousedown", absoluteClose);
        }
        return () => {
            document.removeEventListener("mouseup", absoluteClose);
        };
    }, [modal]);
  
    return(
        <div className={`pwdModal ${modal ? 'show' : 'hide'}`} ref={modalRef}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='#f7f5f5' className="widthSize32 close" onClick={closeModal}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            
            <form action="">
                <label htmlFor="prev">Ancien mot de passe*</label>
                <input type="password" name="prev" required/>
                <label htmlFor="new">Nouveau mot de passe*</label>
                <input type="password" name="new" required/>
                <label htmlFor="confrimNew">Confirmer le nouveau mot de passe</label>
                <input type="password" name="confirmNew" required/>
                <button>Valider</button>
            </form>
        </div>
    )
}