
import React, { Component } from 'react';


class Picture extends Component {

   render() {
      return (
         <div>
            <img src={require("./lando.jpg")} />
         </div >
      )
   };
}

export default Picture;