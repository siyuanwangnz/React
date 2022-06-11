import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
} from '../../redux/counterSlice';

class Counter extends Component {
    render() {
        return (
            <div className='form'>
                <div>
                    <button aria-label="Decrement value" onClick={() => this.props.decrement()}>-</button>&nbsp;&nbsp;
                    <span >Count: {this.props.count}</span>&nbsp;&nbsp;
                    <button aria-label="Increment value" onClick={() => this.props.increment()}>+</button>&nbsp;&nbsp;
                    <span >Status: {this.props.status}</span>&nbsp;&nbsp;
                </div>
                <div >
                    <select ref={c => this.selectNumber = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={() => this.props.incrementByAmount(Number(this.selectNumber.value))} >Add Amount</button>&nbsp;&nbsp;
                    <button onClick={() => this.props.incrementAsync(Number(this.selectNumber.value))} >Add Async</button>&nbsp;&nbsp;
                    <button onClick={() => this.props.incrementIfOdd(Number(this.selectNumber.value))} >Add If Odd</button>&nbsp;&nbsp;
                </div>
                <h2>Under Person Count:{this.props.personListCount}</h2>
            </div>
        )
    }
}

export default connect(
    state => ({
        count: state.counter.value,
        status: state.counter.status,
        personListCount: state.person.personList.length,
    }),
    {
        decrement,
        increment,
        incrementByAmount,
        incrementAsync,
        incrementIfOdd,
    }
)(Counter)