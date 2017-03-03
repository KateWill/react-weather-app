import React from 'react';

class Form extends React.Component {
  
  sendZip = (e) => {
    e.preventDefault();

    this.props.getForecast(this.refs.zip.value)
  }

   render(){
     return (
       <div>
        <form onSubmit={this.sendZip}>
          <input 
            type="text"
            ref="zip"
            placeholder="Enter Zip Code"
            />
            <button className="btn">Submit</button>
        </form>
       </div>
     )
   }
}

export default Form;