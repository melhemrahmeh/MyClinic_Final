import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import Services from "../Services.js"

export default function OperationsPages() {
    return (
        <div>
            <Header />
            <NavBar isMain={false}/>
            <Services />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}