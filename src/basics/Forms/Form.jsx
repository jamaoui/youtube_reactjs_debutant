import {useEffect, useReducer, useRef, useState} from "react";
import {FORM_REDUCER_DEFAULT_VALUES, formReducer} from "./formReducer";

export default function Form() {

    const inputNameRef = useRef()
    const inputDateRef = useRef()
    const inputCityRef = useRef()
    const inputCountryRef = useRef()
    const inputAcceptConditionsRef = useRef()

    const [formValuesWithReducer, dispatch] = useReducer(formReducer, FORM_REDUCER_DEFAULT_VALUES)

    useEffect(() => {
        inputNameRef.current.value = 'Jamaoui'
        inputDateRef.current.value = new Date().toISOString().substring(0, 10)
        inputCountryRef.current.value = 'DZ'
        //inputCityRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'INPUT_CHANGE',
            payload: inputNameRef.current
        })

        dispatch({
            type: 'INPUT_CHANGE',
            payload: inputCityRef.current
        })

        dispatch({
            type: 'SELECT_CHANGE',
            payload: inputCountryRef.current
        })

        dispatch({
            type: 'CHECKBOX_CHANGE',
            payload: inputAcceptConditionsRef.current
        })

    }

    return <div className={'container my-4'}>
        <form>
            <h3>Last update:</h3>
            <hr/>
            {(new Date()).toLocaleString()}
            <hr/>
            <h3>Values</h3>
            {JSON.stringify(formValuesWithReducer)}
            <hr/>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name='name' className='form-control' ref={inputNameRef}/>
            </div>

            <div className="form-group">
                <label>City</label>
                <input type="text" name='city' className='form-control' ref={inputCityRef}/>
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" name='date' className='form-control' ref={inputDateRef}/>
            </div>

            <div className="form-group">
                <label>Country</label>
                <label htmlFor="country"></label>
                <select className="form-control" name="country" ref={inputCountryRef}>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                    <option value='OTHER'>other</option>
                </select>
            </div>

            <div className="form-check">
                <input type="checkbox" name='acceptConditions' className='form-check-input'
                       ref={inputAcceptConditionsRef}/>
                <label htmlFor='accept' className='form-check-label'>Accept our rules</label>
            </div>

            <div className="form-group">
                <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
}