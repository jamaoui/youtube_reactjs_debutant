/*export default function HelloWorld({lastName}) {
    return (<h1>Hello {lastName} </h1>)
}*/

import {Component} from "react";
export default class HelloWorld extends Component {
    render() {
        return <h1>Hello {this.props.lastName}</h1>
    }
}