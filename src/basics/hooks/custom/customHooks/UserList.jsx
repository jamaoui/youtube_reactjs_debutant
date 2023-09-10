import React, {useEffect, useState} from 'react';
import useFetch from "../useFetch";

function UserList() {
    const [users,errors] = useFetch('https://jsonplaceholder.typicode.com/users')
    const displayItems = () => {
        console.log(errors)
        if(users.length > 0) {
            return users.map((item,key) => <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
            </tr>)
        }
        return <tr><td colSpan={4} align={"center"}>No items</td></tr>

    }

    return (
        <div>
            <h2>Users: </h2>
b5
            <table className="table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>User</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {displayItems()}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;