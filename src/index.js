import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from "./Forms/Form";
import FruitList from "./Fruits/FruitList";
import Counter from "./Counter/Counter";
import ToggleName from "./toggle/toggleName";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Counter initialValue={6} />
);
