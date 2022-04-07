import Header from "../../myclinic/Header.js"
import MainPageImage from "../../myclinic/MainPageImage.js"
import NavBar from "../../myclinic/NavBar.js"
import About from "../../myclinic/About.js"
import Footer from "../../myclinic/Footer.js"
import React  from 'react'

export default function MainPage() {
    return (
        <div>
            <Header />
            <NavBar isMain={true} isTeam={false} isOperations={false} isAbout={true} />
            <MainPageImage />
            <About />
            <Footer isMain={true} isTeam={false} isOperations={false} />
        </div>
    );
}