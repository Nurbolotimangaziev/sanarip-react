import React from "react";
import CardItem from './CardItem.js'
export default function Cards(props){
    return(
        <div className="cards">
            {props.cards.map(card=>{
                return <CardItem card={card} key={card.id}></CardItem>
            })}
        </div>
    )
}