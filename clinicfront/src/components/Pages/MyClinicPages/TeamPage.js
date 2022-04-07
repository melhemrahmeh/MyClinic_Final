import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import Team from "../../myclinic/Team.js"
import React  from 'react'

export default function TeamPage() {
    return (
        <div>
            <Header />
            <NavBar isMain={false} isTeam={true} isOperations={false} isAbout={false} />
            <Team />
            <Footer isMain={false} isTeam={true} isOperations={false} />
        </div>
    );
}