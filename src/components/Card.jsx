import React from 'react';
import Picture from './Picture';

const Card = (props) => {

   console.log(props)
   return (
      <div className="cardDiv">
         Hit the Button below to give you the Star Wars Char you should be.
         {typeof props.name !== "undefined" ? props.name : ""}
         <button className="generateButton" onClick={props.handleClick} > Lets Go !</button>
         <Picture />
      </div >
   )
}

export default Card;
