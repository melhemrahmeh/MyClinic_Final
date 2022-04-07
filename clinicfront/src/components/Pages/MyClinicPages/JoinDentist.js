import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import SignUpDentist from "../../forms/SignUpDentist.js"
import React from 'react'

export default function JoinDentist() {

    return (
        <div>
            <Header />
            <NavBar />
            <SignUpDentist />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}