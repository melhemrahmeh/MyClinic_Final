import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import SignUpPatient from "../../forms/SignUpPatient.js"
import React from 'react'


export default function JoinPatient() {

    return (
        <div>
            <Header />
            <NavBar />
            <SignUpPatient />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}