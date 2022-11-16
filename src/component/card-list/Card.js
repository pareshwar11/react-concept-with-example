import { Component } from "react";
import './Card.css'

class Card extends Component {
    render() {
        const { id, name, email } = this.props.monstar;
        return (
            <div className='card-container' key={id}>
                <img alt={`monstar ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        )
    }
}

{/* <div className="row">
<div className="col-md-4">
<img alt={`monstar ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
<h2>{name}</h2>
<p>{email}</p>
</div>
</div> */}
export default Card;