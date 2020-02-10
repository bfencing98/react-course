import React from 'react';
import logo from './logo.svg';
import {HelloPage} from './pages/HelloPage';
import './App.css';
import ReactDOM from 'react-dom';
import {submit} from "react-dom/test-utils";
import {useState, useEffect} from 'react';
import {ApiPage} from "./pages/ApiPage";


function App(props) {
    return (
        <div style={{margin: "4rem"}}>
            <h1>Mon app</h1>
            <ApiPage/>
            <HelloPage/>
        </div>)
}

export default App;

