import React, { Component } from 'react';




class Field extends Component {
   render() {
      return (

         <div>
            <input type="text" className="input" name="inputbox" />
            <button type="submit" className="submitButton"> -SUBMIT-
            </button>
         </div>

      );
   }
}

export default Field;