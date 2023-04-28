import "./Hero.css"
import HeroImg from "../images/photo-grid.png"

function Hero() {
  return (
    <div className="hero">
        <div className="imgBox">
            <img className="heroImg" src={HeroImg} alt="" />
        </div>
        <div className="heroText">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
  )
}

export default Hero