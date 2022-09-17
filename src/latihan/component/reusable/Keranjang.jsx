import React, { Component } from "react";
import Counterr from "./counter/Counterr";
import styled from "styled-components";

const imgProduct = "https://source.unsplash.com/collection/190727/400x300";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 18px;
`;

const Price = styled.p`
  color: grey;
  font-size: 22px;
`;

const Description = styled.p`
  font-size: small;
`;

export default class Keranjang extends Component {
  handelValue = (value) => {
    // console.log(value);
    this.props.receiveValue(value);
  };
  render() {
    return (
      <div>
        <CardContainer>
          <Image src={imgProduct} alt="img" />
          <Heading>Title Card</Heading>
          <Price>$29.00</Price>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic sunt fugit omnis dolor ipsa dolores rem quam placeat et?</Description>
          <Counterr receiveValue={this.handelValue} />
        </CardContainer>
      </div>
    );
  }
}
