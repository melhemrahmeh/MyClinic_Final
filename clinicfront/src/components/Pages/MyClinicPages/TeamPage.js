import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import React  from 'react'
import MeetTheTeam from "../../myclinic/MeetTheTeam.js"

export default function TeamPage() {
    return (
        <div>
            <Header />
            <NavBar isMain={false} isTeam={true} isOperations={false} isAbout={false} />
            <MeetTheTeam />
            <Footer isMain={false} isTeam={true} isOperations={false} />
        </div>
    );
}