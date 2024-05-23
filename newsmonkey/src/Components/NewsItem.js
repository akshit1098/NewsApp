import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2024/05/21/1600x900/Ircon_1716297501791_1716297502161.jpg"} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            {/* target="_blank" opens in new tab the specified link */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
