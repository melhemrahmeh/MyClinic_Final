import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import Team from "../Team.js"
import MainPageImage from "../MainPageImage.js"

export default function TeamPage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false} />
            <Team />
            <Footer isMain={false} isTeam={true}/>
        </div>
    );
}