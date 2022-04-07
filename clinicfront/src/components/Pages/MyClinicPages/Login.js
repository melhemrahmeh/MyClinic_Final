import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import LoginForm from "../../forms/LoginForm.js"
import React  from 'react'

export default function Login() {

    return (
        <div>
            <Header />
            <NavBar isMain={false} />
            <LoginForm />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}