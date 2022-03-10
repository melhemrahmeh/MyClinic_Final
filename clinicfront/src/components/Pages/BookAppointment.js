import Header from "../Header.js"
import MainPageImage from "../MainPageImage.js"
import NavBar from "../NavBar.js"
import Appointment from "../Appointment.js"
import Footer from "../Footer.js"

const BookAppointment = () => {
    return (
        <div >
            <Header />
            <NavBar isMain={false}/>
            <Appointment />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}
 
export default BookAppointment;