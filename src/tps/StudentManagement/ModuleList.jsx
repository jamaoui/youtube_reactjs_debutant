import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {moduleListSelector} from "./store/selectors/moduleSelectors";
import {getNotesByStudentId} from "./store/selectors/noteSelectors";

function ModuleList() {
    const modulesList = useSelector(moduleListSelector)
    const params = useParams()
    const studentNotes = useSelector(getNotesByStudentId(parseInt(params.id)))
    const currentStudent = useSelector(({students}) => students.students.filter((student) => {
        return (student.id === parseInt(params.id))
    })[0])


    const getNote = useCallback((moduleId) => {
        const [note] = studentNotes.filter((note) => note.idModule === moduleId)
        return note
    }, [studentNotes])
    return (<>
        <table className="table">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Student</th>
                <th>Name</th>
                <th>Note</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {modulesList.map((module, key) => {
                const note = getNote(module.id)
                    return <tr key={key}>
                        <td>{module.id}</td>
                        <td>{currentStudent.name}</td>
                        <td>{module.title}</td>
                        <td>{note?.note}</td>
                        <td>
                            <div className="btn-group gap-1" role="group" aria-label="Basic example">
                                <Link className={'btn btn-primary'} to={`/note/${note?.id}/update`}>
                                    Update
                                </Link>
                            </div>
                        </td>
                    </tr>
                }
            )}
            </tbody>
        </table>

    </>);
}

export default ModuleList;