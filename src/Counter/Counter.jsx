import { Component } from "react";

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(
            prevState => {
                return { counter: prevState.counter+1 }
            }
        )
    };

    handleReset = () => {
        this.setState({ counter: 0 })
    };


    render() {
        return <div>
            <button onClick={this.handleClick}>Click to increment !! </button>
            <button onClick={this.handleReset}>Reset !! </button>
            Il y a {this.state.counter} secondes
        </div>
    }
}