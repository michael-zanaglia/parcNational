export default function Observer(Myelements){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                Myelements.current.classList.add("show");
                observer.unobserve(entry.target);
            } else {
                Myelements.current.classList.remove("show"); 
            }
        })
    },{threshold:0})
    observer.observe(Myelements.current);
}