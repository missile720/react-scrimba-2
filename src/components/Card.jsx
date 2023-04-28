import "./Card.css"
import star from "../../assets/star.png"

function Card(props) {
    let badgeText;

    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE";
    }
    
  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="cardImg" src={`/../../assets/${props.coverImg}`} alt="" />
        <div className="cardText">
            <p className="textCenter"><img className="star" src={star} alt="star" /> {props.stats.rating} <span className="textLight">({props.stats.reviewCount}) · {props.location}</span></p>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    </div>
  )
}

export default Card