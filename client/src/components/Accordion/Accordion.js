//Accordion component.  Uses css transitions for animations

import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {

  //active: false = closed accordion
  state = {
    active: false
  };

  //open or close accordion
  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <button 
          className="button accordion is-info" 
          onClick={this.handleClick}
        >
          <div>
            {this.props.headline}
          </div>
          <div>
            <i 
              className={`fas fa-chevron-right 
              ${this.state.active ? "active" : "inactive"} 
              `}></i>
          </div>
        </button>
        <div
          className={`panel 
          ${this.state.active ? "active" : "inactive"} 
          `}>
          <p><strong>Date: </strong>{this.props.date}</p>
          <p>{this.props.snippet}</p>
          <p><a href={this.props.link} target="_blank">Click here for NYT article</a></p>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Accordion;