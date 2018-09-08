//homepage

import React, { Component } from "react";
import { Navbar } from "../../components/Layout";
import { SearchForm, SearchResults } from "../../components/Search";
import API from "../../utils/API";

class Home extends Component {
  state = {
    articles: [],
    topic: {input: "", valid: false},
    begin: {input: "", valid: false},
    end: {input: "", valid: false},
    year: new Date().getFullYear()
  };

  //get articles from nyt
  getArticles = (topic, begin, end) => {
    API.getArticles(topic, begin, end)
      .then(res => {
        let articles = res.data.response.docs.splice(0, 5);
        articles = articles.map(result => {
          let obj = {};
          obj.timesID = result._id;
          obj.headline = result.headline.main;
          obj.date = result.pub_date;
          obj.snippet = result.snippet;
          obj.link = result.web_url;         
          return obj;
        });

        this.setState({
          articles
        });
      })
      .catch(err => console.log(err));
  };

  //form input handler.  validates.
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      [name]: {...prevState[name], input: value}
    }), () => {
      this.validateInput(name, value);
    });
  };

  //validation function
  validateInput = (name, value) => {
    switch(name){
      case "topic":
        if(value){
          this.setState(prevState => ({
            [name]: {...prevState[name], valid: true}
          }));
        }
        else{
          this.setState(prevState => ({
            [name]: {...prevState[name], valid: false}
          }));
        }
        break;
      case "begin":
      case "end":
        if (this.validateYear(value)) {
          this.setState(prevState => ({
            [name]: {...prevState[name], valid: true}
          }));
        }
        else{
          this.setState(prevState => ({
            [name]: {...prevState[name], valid: false}
          }));
        }
        break;
      //avoid warning by declaring default
      default:
        //do nothing
    }
  };

  //function for validating year
  validateYear = year => {
    if (year.length !== 4) {
      return false;
    }

    if (!year.match(/\d{4}/)) {
      return false;
    }

    if (parseInt(year, 10) < 1851 || parseInt(year, 10) > this.state.year) {
      return false;
    }

    return true;
  };

  //on form submit
  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.topic.valid && this.state.begin.valid && this.state.end.valid) {
      this.getArticles(this.state.topic.input, this.state.begin.input, this.state.end.input);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchForm
          onChange={this.handleInputChange}
          topicValue={this.state.topic.value}
          beginValue={this.state.begin.value}
          endValue={this.state.end.value}
          onClick={this.handleFormSubmit}
          validTopic={this.state.topic.valid}
          validBegin={this.state.begin.valid}
          validEnd={this.state.end.valid}
        />
        {this.state.articles.length > 0 && (
          <SearchResults results={this.state.articles} />
        )}
      </div>
    );
  }
}

export default Home;