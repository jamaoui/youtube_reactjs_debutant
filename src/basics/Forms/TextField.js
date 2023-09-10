/*export default function TextField({children,inputLabel,inputName}) {
    return (
        <>
            <label>{inputLabel}</label>
            <input name={inputName} type='text' />
            <div>{children}</div>
        </>
)
}*/

import {Component} from "react";

export default class TextField extends Component {
    render() {
        return <>
            <label>{this.props.inputLabel}</label>
            <input name={this.props.inputName} type='text' />
            <div>{this.props.children}</div>
        </>
    }
}