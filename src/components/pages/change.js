import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <li className="cards__item">
          <Link className="cards__item__link" to={this.props.path}>
            <figure
              className="cards__item__pic-wrap"
              data-category={this.props.label}
            >
              <img
                className="cards__item__img"
                alt="TravelImage"
                src={this.props.src}
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{this.props.text}</h5>
            </div>
          </Link>
        </li>
      </div>
    );
  }
}

export default CardItem;
