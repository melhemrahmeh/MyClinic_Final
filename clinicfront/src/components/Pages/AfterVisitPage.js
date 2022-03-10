import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import AfterVisit from "../../forms/AfterVisit.js"

export default function AfterVisitPage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false}/>
            <AfterVisit />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}