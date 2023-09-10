import React from 'react';
import {useSelector} from "react-redux";
import {studentListSelector} from "./store/selectors/studentSelectors";
import {Link} from "react-router-dom";

function StudentList() {
    const studentsList = useSelector(studentListSelector)
    return (<>
        <table className="table">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {studentsList.map((student, key) => <tr key={key}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>
                    <div className="btn-group gap-1" role="group" aria-label="Basic example">
                        <Link className={'btn btn-primary'} to={`/student/${student.id}/update`}>
                            Update
                        </Link>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                    </div>
                </td>
            </tr>)}
            </tbody>
        </table>

    </>);
}

export default StudentList;