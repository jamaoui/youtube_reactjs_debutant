import {useEffect, useRef, useState} from "react";

export default function Form() {

    const inputNameRef = useRef()
    const inputDateRef = useRef()
    const inputCityRef = useRef()
    const inputCountryRef = useRef()
    const inputAcceptConditionsRef = useRef()

    const [formValues, setFormValues] = useState({
        name:'',
        city:'',
        date: undefined,
        country:'MA',
        acceptConditions: false
    })

    useEffect(() => {
        inputNameRef.current.value = 'Jamaoui'
        inputDateRef.current.value = new Date().toISOString().substring(0,10)
        inputCountryRef.current.value = 'DZ'
        //inputCityRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValues({
            name: inputNameRef.current.value,
            city: inputCityRef.current.value,
            country: inputCountryRef.current.value,
            acceptConditions: inputAcceptConditionsRef.current.value,
        })
    }

    return <div className={'container my-4'}>
        <form>
            <h3>Last update:</h3>
            <hr/>
            {(new Date()).toLocaleString()}
            <hr/>
            <h3>Values</h3>
            {JSON.stringify(formValues)}
            <hr/>
            <div className="form-group">
                <label>Name</label>
                <input type="text" id='name' className='form-control' ref={inputNameRef}/>
            </div>

            <div className="form-group">
                <label>City</label>
                <input type="text" id='city' className='form-control' ref={inputCityRef}/>
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" id='date' className='form-control' ref={inputDateRef}/>
            </div>

            <div className="form-group">
                <label>Country</label>
                <label htmlFor="country"></label>
                <select className="form-control" id="country"  ref={inputCountryRef}>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                    <option value='OTHER'>other</option>
                </select>
            </div>

            <div className="form-check">
                <input type="checkbox" id='acceptConditions' className='form-check-input' ref={inputAcceptConditionsRef}/>
                <label htmlFor='accept' className='form-check-label'>Accept our rules</label>
            </div>

            <div className="form-group">
                <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
}