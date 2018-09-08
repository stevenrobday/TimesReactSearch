//component for each saved result

import React, { Component } from "react";
import Accordion from "../Accordion";
import API from "../../utils/API";

export class SavedResult extends Component {
  deleteResult = id => {
    API.deleteArticle(id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Accordion
        headline={this.props.result.headline}
        date={this.props.result.date}
        snippet={this.props.result.snippet}
        link={this.props.result.link}
      >
        <button onClick={() => this.deleteResult(this.props.result.timesID)} className="button is-danger">DELETE</button>
      </Accordion>
    );
  }
}