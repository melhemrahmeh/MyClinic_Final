import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import MeetTheTeam from "../../myclinic/MeetTheTeam.js"
import React from 'react'

export default function MeetTheTeamPage() {
    return (
        <div>
            <Header />
            <NavBar isMain={false} isTeam={true} isOperations={false} isAbout={false} />
            <MeetTheTeam />
        </div>
    );
}