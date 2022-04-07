import About from "../../myclinic/About"
import Header from "../../myclinic/Header.js"
import NavBar from "../../myclinic/NavBar.js"
import Footer from "../../myclinic/Footer.js"
import React  from 'react'

export default function AboutUs() {

    return (
        <div>
            <Header />
            <NavBar isMain={false} isTeam={false} isOperations={false} isAbout={true} />
            <About />
            <Footer isMain={false} isTeam={false}/>
        </div>
    );
}