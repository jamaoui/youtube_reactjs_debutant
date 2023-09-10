import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";
import User from "./User";
import UserForm from "./UserForm";

function App() {
    return (
        <Provider store={store}>
            <User/>
            <UserForm/>
        </Provider>
    );
}

export default App;