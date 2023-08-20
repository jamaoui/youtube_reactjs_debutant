/*export default function HelloWorld({lastName}) {
    const age = 18
        return <h1>Hello {lastName} {age>= 18 ? 'Adult' : 'Minor'}</h1>
}*/

import {Component} from "react";
export default class HelloWorld extends Component {
    age = 15
    render() {
        return <h1>Hello {this.props.lastName} {this.age>= 18 ? 'Adult' : 'Minor'}</h1>
    }
}