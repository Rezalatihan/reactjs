import React, { Component } from "react";
import styled from "styled-components";

const Qty = styled.p`
  font-size: 22px;
  width: 600px;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: drakslategrey;
  background-color: lightgreen;
  text-align: center;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

class Counterr extends Component {
  state = {
    value: 0,
  };

  handelPlus = () => {
    this.setState({ value: this.state.value + 1 }, () => this.props.receiveValue(this.state.value));
  };

  handelMinus = () => {
    this.setState({ value: this.state.value - 1 }, () => this.props.receiveValue(this.state.value));
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Button onClick={this.handelMinus}>-</Button>
        <Qty>{this.state.value}</Qty>
        <Button onClick={this.handelPlus}>+</Button>
      </div>
    );
  }
}

export default Counterr;
