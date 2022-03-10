import About from "../About.js"
import Header from "../Header.js"
import NavBar from "../NavBar.js"
import MainPageImage from "../MainPageImage.js"
import Footer from "../Footer.js"

export default function AboutUs() {

    return (
        <div>
            <Header />
            <NavBar isMain={false}/>
            <About />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}