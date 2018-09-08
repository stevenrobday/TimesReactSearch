//component for each search result

import React, { Component } from "react";
import Accordion from "../Accordion";
import API from "../../utils/API";

export class SearchResult extends Component {
  state = {
    saved: ""
  };

  componentDidMount() {
    this.findArticle(this.props.result.timesID);
  }

  saveResult = obj => {
    API.saveArticle(obj)
      .then(res => {
        this.setState({
          saved: true
        });
      })
      .catch(err => console.log(err));
  }

  deleteResult = id => {
    API.deleteArticle(id)
      .then(res => {
        this.setState({
          saved: false
        });
      })
      .catch(err => console.log(err));
  }

  findArticle = id => {
    API.findArticle(id)
      .then(res => {
        if (res.data.length) {
          this.setState({
            saved: true
          });
        }
        else {
          this.setState({
            saved: false
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Accordion
        headline={this.props.result.headline}
        date={this.props.result.date}
        snippet={this.props.result.snippet}
        link={this.props.result.link}
      >
      {this.state.saved ? (
        <button onClick={() => this.deleteResult(this.props.result.timesID)} className={`button is-danger ${this.props.result.id}`}>DELETE</button>
      ) : (
          <button onClick={() => this.saveResult(this.props.result)} className={`button is-success ${this.props.result.id}`}>SAVE</button>
      )}
      </Accordion>
    );
  }
}