import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {studentListSelector} from "./store/selectors/studentSelectors";
import ModuleList from "./ModuleList";
import {getNoteById} from "./store/selectors/noteSelectors";
import {useParams} from "react-router-dom";
import {updateNote} from "./features/NotesSlice";

function NoteUpdate() {
    const params = useParams()
    const dispatch = useDispatch()
    const note = useRef()
    const currentNote = useSelector(getNoteById(parseInt(params.id)))
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(updateNote({
            id: parseInt(params.id),
            note: note.current.value,
        },))
        window.history.back()
    }
    return (<>
        <h1>Note update</h1>
        <form>
            <div className="mb-3 row">
                <label htmlFor="note" className="col-sm-2 col-form-label">Note</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="note" ref={note} defaultValue={currentNote?.note}
                           name="note"/>
                </div>
            </div>
            <div className="mb-3 row">
                <button onClick={handleClick} className="btn btn-primary">Save</button>
            </div>
        </form>
    </>);
}

export default NoteUpdate;