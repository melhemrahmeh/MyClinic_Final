import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import AddPatient from "../../forms/AddPatient.js"

export default function AddPatientPage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false}/>
            <AddPatient />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}