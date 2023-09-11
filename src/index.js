import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Provider} from "react-redux";
import store from "./Redux/store";
import User from "./basics/PropTypes/User";
import HelloWorld from "./basics/helloWorld/HelloWorld";
import Animation from "./tps/Animation/Animation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <Animation/>
        </Provider>
    </>
);