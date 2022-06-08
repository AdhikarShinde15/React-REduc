import React from "react";
import { connect } from "react-redux";
import { increment,decrement,addValue, resetAll } from "../actions/counter";
// import { useState } from "react";

export class Counter extends React.Component  {
  state = {
    incValue: 0
  }
  setincValue = (value) => {
    this.setState({
      incValue : Number(value) || 0
    })
  }
  increment = () => {
    this.props.increment()
  }
  decrement = () => {
    this.props.decrement()
  }
  addValue = () => {
    this.props.addValue(this.state.incValue)
  }
  resetAll = () => {
    this.setState({
      incValue :  0
    })
      this.props.resetAll()
  }
render() {
  return (
    <div>
        <p>Counter {this.props.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Deccrement</button>
        <input type="text" value={this.state.incValue} onChange={(e) => this.setincValue(e.target.value)}/>
        <button onClick={this.addValue}>Add Number</button>
        <button onClick={this.resetAll}>Reset Everything </button>
    </div>
  )
      }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  addValue:  (value) => dispatch(addValue(value)),
  resetAll: () => dispatch(resetAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);