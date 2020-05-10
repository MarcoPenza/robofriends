import React, { Component } from "react";
import Card from "./Card";
import "../styles/CardList.css";

class CardList extends Component {
  render() {
    const card = this.props.robots.map((robot) => (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
        username={robot.username}
      />
    ));
    return <div className="CardList">{card}</div>;
  }
}

export default CardList;
