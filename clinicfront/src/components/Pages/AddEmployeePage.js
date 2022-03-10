import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import AddEmployee from "../../forms/AddEmployee.js"

export default function AddEmployeePage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false} />
            <AddEmployee />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}