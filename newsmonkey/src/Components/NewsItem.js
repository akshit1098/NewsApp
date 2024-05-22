import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <di className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </di>
    );
  }
}

export default NewsItem;
