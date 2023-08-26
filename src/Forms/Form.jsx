/*export default function TextField({children,inputLabel,inputName}) {
    return (
        <>
            <label>{inputLabel}</label>
            <input name={inputName} type='text' />
            <div>{children}</div>
        </>
)
}*/

import {Component, useState} from "react";

export default function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleNameInputChange = () => {
        const name = document.querySelector('#name').value
        setName(name)
    };

    const handleAgeInputChange = () => {
        const age = document.querySelector('#age').value
        setAge(age)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            age
        })
    }
    return <div>
        <form>
            <input type="text" id='name' onChange={handleNameInputChange} placeholder='Name'/>
            <input type="number" id='age' onChange={handleAgeInputChange} placeholder='Age'/>
            <input type="submit" onClick={handleSubmit} value='Submit'/>
        </form>
    </div>
}