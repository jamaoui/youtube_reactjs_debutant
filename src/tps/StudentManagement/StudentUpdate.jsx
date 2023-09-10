import React from 'react';
import {useSelector} from "react-redux";
import {studentListSelector} from "./store/selectors/studentSelectors";
import ModuleList from "./ModuleList";

function StudentUpdate() {
    return (<>
        <h1>Student update</h1>
        <ModuleList/>
    </>);
}

export default StudentUpdate;