import React, {useContext} from 'react';
import {AppContext} from './App'
import HelloWorld from "../../helloWorld/HelloWorld";

function Card({title, body}) {
    const context = useContext(AppContext)
    return (
        <>
            <div className="card mb-3 mx-3"
                 style={(context.isDarkMode) ? {color: 'white', backgroundColor: 'black'} : {}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src="https://picsum.photos/200/300?grayscale"
                             alt=""/>
                        <HelloWorld lastName='Jamaoui'/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body"><h4 className="card-title">{title}</h4>
                            <p className="card-text">{body}</p>
                            <p className="card-text"><small
                                style={(context.isDarkMode) ? {color: 'white', backgroundColor: 'black'} : {}}>Last
                                updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;