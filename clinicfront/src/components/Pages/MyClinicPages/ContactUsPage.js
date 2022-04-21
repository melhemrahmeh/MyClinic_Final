import ContactUs from '../../myclinic/ContactUs.js'
import Header from "../../myclinic/Header.js"
import NavBar from "../../myclinic/NavBar.js"
import Footer from "../../myclinic/Footer.js"
import React from 'react'

const ContactUsPage = () => {
    return (
        <div >
            <Header />
            <NavBar isMain={false} isTeam={false} isOperations={false} isAbout={false} />
            <ContactUs />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}

export default ContactUsPage;