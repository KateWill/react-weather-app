import React from 'react';
import Form from './Form';
import Forecast from './Forecast';

class Weather extends React.Component {
   state= {forecast:{}}
    
   getForecast = (zip) => {
     
     $.ajax({
       url: `/api/weather/${zip}`,
       type: 'GET'
     }).done( forecast => {
       let city=forecast.location.city;
       let condition=forecast.item.condition.text;
       let temp=forecast.item.condition.temp;

       this.setState({ forecast: {city, condition, temp} });
     
     })
   }

   render(){
     return (
       <div>
        <Form getForecast={this.getForecast} />
        <Forecast forecast={this.state.forecast} />
       </div>
     )
   }
}

export default Weather;