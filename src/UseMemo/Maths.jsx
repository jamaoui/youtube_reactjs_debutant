import React, {useMemo, useRef, useState} from 'react'

const expensiveCalcul = (value) => {
    console.log('calcul in progress')
    for(let i = 0; i<10000;++i) {
        value++
    }

    return value
}

function Maths() {
    const text = useRef()
    const [n, setN] = useState(0)
    const startDate = performance.now();
    let endDate = null
    const handleClick = () => {
        setN(parseInt(text.current.value))
    }
    const calculate = useMemo(() => {
        const value = (expensiveCalcul(n))
        endDate = performance.now()
        console.log('It took ' + ( endDate - startDate) + ' ms.');
        return value
    },[n])
    return (
        <div>
            <input defaultValue={0}  type="text" id={'text'} ref={text}/>
            <button className="btn btn-primary" onClick={handleClick}>Re-calculate</button>
            <h1>Value : {calculate}</h1>
        </div>
    );
}

export default React.memo(Maths);