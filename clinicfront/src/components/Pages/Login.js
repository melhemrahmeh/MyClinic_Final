import Header from "../Header.js"
import Footer from "../Footer.js"
import NavBar from "../NavBar.js"
import LoginForm from "../../forms/LoginForm.js"

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