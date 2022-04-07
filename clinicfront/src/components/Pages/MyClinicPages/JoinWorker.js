import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import SignUpWorker from "../../forms/SignUpWorker.js"
import React from 'react'


export default function JoinWorker() {

    return (
        <div>
            <Header />
            <NavBar />
            <SignUpWorker />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}