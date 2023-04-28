import "./Navbar.css"
import Logo from "../../img/airbnb-logo.png"

function Navbar() {
  return (
    <nav className="navbar">
        <img className="logo" src={Logo} alt="airbnb-logo" />
    </nav>
  )
}

export default Navbar