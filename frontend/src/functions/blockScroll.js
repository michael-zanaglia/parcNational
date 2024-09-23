export default function blockScroll(blocked){
    if(blocked){
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    } else {
        document.body.style.overflow = 'visible';
        document.body.style.height = 'auto';
    }
}