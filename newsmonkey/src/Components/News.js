import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  //this will run before render()
  constructor() {
    super();
    console.log("I am constructor from News component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  //this method componentDidMount will run after the render() method runs
  //Lifecycle method
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a276d7ba940e4916b784caeccb6af28a";
    //by using await, aync function will await for the promise of fetch to get resolved and will not skip
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 45):""}
                  description={element.description?element.description.slice(0, 88):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

//col md-4 means 4x4 grid here it is 4x3
