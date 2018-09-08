//saved articles page

import React, { Component } from "react";
import { Navbar } from "../../components/Layout";
import { SavedResults } from "../../components/Saved";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.loadArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.state.articles.length > 0 && (
          <SavedResults results={this.state.articles} />
        )}
      </div>
    );
  }
}

export default Saved;