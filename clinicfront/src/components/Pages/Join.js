import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import MainPageImage from "../MainPageImage.js"
import About from "../About.js"

export default function Join() {

    return (
        <div>
            <Header />
            <NavBar />
            <MainPageImage />
            <About />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}