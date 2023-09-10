import React, {createContext, useState} from 'react';
import Card from "./Card";

export const AppContext = createContext({
    isDarkMode: false,
})
export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleChange = () => {
        setIsDarkMode(prevState => !prevState)
    }
    const styles = () => {
        if (isDarkMode) {
            return {
                color: 'white',
                backgroundColor: 'black',
            }
        }
        return {
            color: 'black',
            backgroundColor: 'white',
        }
    }
    return (
        <AppContext.Provider value={{isDarkMode}}>
            <div style={{color: styles().color, backgroundColor: styles().backgroundColor}}>
                <div className="nav d-block">
                    <ul className="nav nav-tabs d-flex justify-content-end" id="navId">
                        <li className="nav-item float-end">
                            <div className="form-check form-control-lg form-switch">
                                <input className="form-check-input" onChange={handleChange} type="checkbox"
                                       id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <Card title='Sport' body='lorem ipsum'/>
                    <Card title='News' body='lorem ipsum'/>
                    <Card title='Movies' body='lorem ipsum'/>
                    <Card title='Fashion' body='lorem ipsum'/>
                    <Card title='Fashion' body='lorem ipsum'/>
                    <Card title='Fashion' body='lorem ipsum'/>
                </div>
            </div>
        </AppContext.Provider>
    );
}