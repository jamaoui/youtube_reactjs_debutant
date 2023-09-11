import React, {useEffect} from 'react';
import PropTypes from "prop-types";

function User({fullName, age, jobTitle, isAdult, certifications, salary, cv, sayHello}) {
    useEffect(() => {
        sayHello()
    }, []);
    return (
        <>
            <div className="container my-5">
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex gap-2 me-3 position-absolute end-0">
                                <span className="badge badge-pill badge-primary bg-info">{jobTitle}</span>
                                {isAdult && <span className="badge badge-pill badge-primary bg-primary">Adult</span>}
                                <span className="badge badge-pill badge-primary bg-success">{salary} MAD</span>
                            </div>
                            <h4 className="card-title">{fullName} ( {age} years )</h4>
                            <ul className="list-group">
                                {certifications?.map((certification, key) => <li key={key} className="list-group-item">
                                    {certification}
                                </li>)}
                            </ul>
                            {cv}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

User.propTypes = {
    fullName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    isAdult: PropTypes.bool.isRequired,
    certifications: PropTypes.arrayOf(PropTypes.string),
    salary: PropTypes.number.isRequired,
    cv: PropTypes.node,
    sayHello: PropTypes.func.isRequired,
    age: (props, propName, componentName) => {
        const currentProp = props[propName]
        if (!Number.isInteger(currentProp)) {
            return new Error(`Failed prop type: The prop ${propName} is marked as required in ${componentName}, but its value is ${typeof currentProp}`)
        }
    },
}

User.defaultProps = {
    salary: 0,
    isAdult: true
}

export default User;