import {Component} from "react";

/*export default  function Event() {
    const handleClick = () => {
        alert('Boom !!! ')
    };

    return <div>
        <button onClick={handleClick} >Click me ! </button>
    </div>
}*/
export default class Event extends Component {

    handleClick = () => {
        console.log(this)
        alert('Boom !!! ')
    }
    render() {
        return <div>
            <button onClick={this.handleClick} >Click me ! </button>
        </div>
    }
}