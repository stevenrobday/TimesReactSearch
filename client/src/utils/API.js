//api routes

import axios from "axios";
require('dotenv').config();

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = process.env.REACT_APP_NYT_API_KEY;

export default {
  getArticles: function(topic, begin, end) {
    return axios.get(
      BASEURL, 
      { params: {
          'api-key': APIKEY,
          q: topic,
          begin_date: `${begin}0101`,
          end_date: `${end}1231`
        } 
      });
  },

  saveArticle: function(req) {
    return axios.post("/api/articles/", (req));
  },

  findArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  loadArticles: function() {
    return axios.get("/api/articles/");
  }
};
