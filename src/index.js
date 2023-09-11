import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Provider} from "react-redux";
import store from "./Redux/store";
import App from "./tps/StudentManagement/App";
import Animation from "./tps/Animation/Animation";
import CounterClick from "./Hoc/CounterClick";
import CounterHover from "./Hoc/CounterHover";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <CounterClick/>
            <CounterHover title={'Counter'} color={'bg-danger'}/>
        </Provider>
    </>
);