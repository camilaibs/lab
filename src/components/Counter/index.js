import React from 'react';
import { increment, decrement } from '../../reducers';
import './counter.css';


export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            this.setState({counter: this.props.store.getState()});
        });
    }

    incrementCounter() {
        // dispatch increment action
        this.props.store.dispatch(increment());
    }

    decrementCounter() {
        // dispatch decrement action
        this.props.store.dispatch(decrement());
    }

    render() {
        return (
            <fieldset className="input-counter">
                <button className="input-counter__control" type="button" onClick={this.incrementCounter}>+</button>
                <input className="input-counter__output" type="text" value={this.state.counter} readOnly />
                <button className="input-counter__control" type="button" onClick={this.decrementCounter}>-</button>
            </fieldset>
        );
    }
}