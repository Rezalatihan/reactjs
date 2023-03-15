import Index from './bar/Index';
import Keranjang from './Keranjang';
import React, { Component } from 'react';
class Iindex extends Component {
  state = {
    value: 0,
  };
  handeValue = (data) => {
    // console.log(data);
    this.setState({
      value: data,
    });
  };
  render() {
    return (
      <div>
        <Index value={this.state.value} />
        <Keranjang receiveValue={this.handeValue} />
      </div>
    );
  }
}
export default Iindex;
