import React from "react";

function Beers(props) {
    return(
        <ul>
            {props.beers.map((beer, index) => (
                <li>
                    <img src={beer.image_url} alt={beer.id}/>
                    <p>{beer.name}<span><button>Like</button></span></p>
                   
                   
                </li>
            ))}
        </ul>
    )
}

export default Beers;