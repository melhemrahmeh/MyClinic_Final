import Header from "../Header.js"
import MainPageImage from "../MainPageImage.js"
import NavBar from "../NavBar.js"
import About from "../About.js"
import Footer from "../Footer.js"

export default function MainPage() {
    return (
        <div>
            <Header />
            <NavBar isMain={true}/>
            <MainPageImage />
            <About />
            <Footer isMain={true} isTeam={false} />
        </div>
    );
}