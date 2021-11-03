import React from "react";
import { useState, useEffect } from "react"

let buttonStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    background: 'red'
}

let buttonStyle2 = {
    marginLeft: '10px',
    marginRight: '10px',
    background: 'green'
}


function Beers(props) {

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        console.log(isLiked);
    }, [isLiked]);

    let handleClick = (props) => {
        console.log(buttonStyle)
        setIsLiked(!isLiked);
      }


    return(
            <li style={{ listStyle: "none"}}>
                <img style={{ marginTop: "50px"}} src={props.image_url} alt={props.id}/>
                <p>{props.name}</p>
                <button style={isLiked === true ? buttonStyle : buttonStyle2} onClick={handleClick} >
                  {isLiked === false ? "Liked" : "Not Liked"}  
                </button>
            </li>
            
    )
}

export default Beers;

// get array value thru props

