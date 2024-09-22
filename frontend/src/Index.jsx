import "./styles/style.css"
import "./styles/index.css"
import Header from "./components/useAgain/Header/Header"
import Footer from "./components/useAgain/Footer/Footer"

export default function Index(){
    return(
        <>
            <Header theme={'#559D53'} color={'#F7F5F5'} hoverTheme={'#448C42'}/>
            <Footer/>
        </>
    )
}