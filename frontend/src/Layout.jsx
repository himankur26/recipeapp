import {Outlet} from "react-router-dom"
import Header from "./utilities/navbar/Navbar";
import Footer from "./utilities/footer/Footer";

function Layout(){

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;
