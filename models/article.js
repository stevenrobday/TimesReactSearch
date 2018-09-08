//schema for Article collection

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: String,
  timesID: String,
  date: Date,
  snippet: String,
  link: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
