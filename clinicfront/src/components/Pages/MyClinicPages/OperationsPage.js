import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import Services from "../../myclinic/Services.js"
import React  from 'react'

export default function OperationsPages() {
    return(
        <div>
            <Header />
            <NavBar isMain={false} isTeam={false} isOperations={true} isAbout={true} />
            <Services />
            <Footer isMain={false} isTeam={false} isOperations={false}/>
        </div>
    );
}