import {Component} from "react";
import HelloWorld from "../helloWorld/HelloWorld";

export default class ToggleName extends Component{

    constructor(props) {
        super(props);
        this.state = {
            displayName: true
        }
    }

    toggleName = () => {
        this.setState(prevState => {
            return { displayName: !prevState.displayName }
        })
    };

    render() {
        return <div>
            <button onClick={this.toggleName}>{this.state.displayName.toString()}</button>
            {
                this.state.displayName === true ?
                    <HelloWorld lastName={'JAMAOUI'} />
                :
                undefined
            }


        </div>
    }


}