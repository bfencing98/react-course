import React, {useEffect, useState} from 'react';
import {HelloTo} from "./HelloTo";


export const ApiPage = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messages = fetch("https://react-formation-2k20.herokuapp.com/message")
            .then(res => res.json())
            .then(data => setMessages(data.messages))

    }, []);

    return (
        <div style={{backgroundColor: "aqua", color: "red", padding: "1rem"}}>
            <h3>API Calls</h3>
            <ul>
                {messages && messages.map(message => <li>{message.content}</li>)}
            </ul>
        </div>
    )
};

