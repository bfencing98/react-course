import React, {useEffect, useState} from 'react';
import {HelloTo} from "./HelloTo";


const headers = new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
});


export const ApiPage = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("https://react-formation-2k20.herokuapp.com/message")
            .then(res => res.json())
            .then(data => setMessages(data.messages))

    }, []);


    const sendMessage = () => {
        const newMessage = {content: "bob"};

        fetch("https://react-formation-2k20.herokuapp.com/message/new", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newMessage)
        }).then(res => console.log("post result", res))

    };

    return (
        <div style={{backgroundColor: "aqua", color: "red", padding: "1rem"}}>
            <h3>API Calls</h3>
            <ul>
                {messages && messages.map(message => <li>{message.content}</li>)}
            </ul>

            <button onClick={sendMessage}>send a "bob" message</button>
        </div>
    )
};


