import {Component, useState} from "react";

export default function FruitList() {

    const [fruit,setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])
    const displayFruits = () => fruitList.map((fruit,fruitKey) => <li key={fruitKey}>{fruit}</li>)
    const handleInput = () => {
        const fruitValue = document.querySelector('#fruit').value
        setFruit(fruitValue)
    }

    const handleAddFruit = (e) => {
        e.preventDefault()
        setFruitList([...fruitList, fruit])
    }
    return <>
        <span>
            <form>
                <input onChange={handleInput} type="text" id='fruit'/>
                <input onClick={handleAddFruit} type="submit" value='Add fruit'/>
            </form>
        </span>
        <h1 className='h1'>Fruits : </h1>
        <ul>
            {displayFruits()}
        </ul>
    </>
}
