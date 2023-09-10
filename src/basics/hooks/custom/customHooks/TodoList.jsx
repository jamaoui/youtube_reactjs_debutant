import React, {useEffect, useState} from 'react';
import useFetch from "../useFetch";

function TodoList(props) {
    const [todos,errors] = useFetch('https://jsonplaceholder.typicode.com/todos')
    const displayItems = () => todos.slice(0,10).map((item,key) => <tr key={key}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{
            item.completed ?
                <span className="badge badge-pill badge-primary bg-success">Completed</span>
                :
                <span className="badge badge-pill badge-danger bg-danger">Incomplete</span>
        }</td>
    </tr>

)
    useEffect(() => {

        console.log(errors)
    }, [todos]);
    return (
        <div>
            <h2>Todos: </h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                    {displayItems()}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;