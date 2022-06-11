import { Component } from "react";
import './CardList.styles.css';
import Card from './../card/Card';
import { render } from "@testing-library/react";

//Destructuring can be done right in the fn argument.
const CardList = ({ monsters }) => {
  //Return() is implicit
  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} />
    })}
  </div>
}

export default CardList;