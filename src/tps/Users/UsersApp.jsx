import {createContext, useState} from "react";
import UsersLayout from "./UsersLayout";

export const UsersContext = createContext({
    users: [],
    lastId: 0,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
})

export default function UsersApp() {

    const [users, setUsers] = useState([
        {id: 1, fullName: 'Jamaoui mouad', country: 'Morocco'},
        {id: 2, fullName: 'Jamaoui aymane', country: 'Tunisia'}
    ])
    const [lastId, setLastId] = useState(users.length)

    const addUser = (data) => {
        setUsers(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState + 1)
        window.history.back()
    }

    const deleteUser = (data) => {
        setUsers(prevState => prevState.filter(user  => user.id !== parseInt(data.payload.id)))
        window.history.back()
    }

    const updateUser = (data) => {
        const {id, ...rest} = data.payload
        setUsers(prevState => prevState.map(user => {
            if (user.id === id) {
                return {id: user.id,...rest}
            }
            return user
        }))
        window.history.back()
    }
    return (
        <>
            <UsersContext.Provider value={{
                users: users,
                lastId: lastId,
                actions: {
                    addUser,
                    deleteUser,
                    updateUser
                }
            }}>
                <UsersLayout/>
            </UsersContext.Provider>
        </>
    );
}