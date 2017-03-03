import React from 'react';

class Forecast extends React.Component {
  

   render(){
     let { city, condition, temp } = this.props.forecast;
     return (
       <div>
        {city && <p>City: {city}</p>}
        {condition && <p>Condition: {condition}</p>}
        {temp && <p>Temp: {temp}&deg;F</p>}
       </div>
     )
   }
}

export default Forecast;