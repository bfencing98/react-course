import React, {useState} from 'react';
import {HelloTo} from "./HelloTo";


const myFriends = ["Juju", "Matmat", "Jerem", "Poupou", "Nico"];


const buttonStyle = {background: "none"};
export const HelloPage = () => {
    const [friendList, setFriendList] = useState(myFriends);
    const [newFriend, setNewFriend] = useState();


    const removeFriend = (removeName) => {
        const newFriendList= friendList.filter(friendName =>  friendName !== removeName );
        setFriendList(newFriendList)
    };

    const addFriend = () => {
        setFriendList(friendList.concat([newFriend]));
        setNewFriend("");
    };

    return (
        <div style={{backgroundColor: "grey", color: "white", padding: "1rem"}}>
            <h3>Hello</h3>
            <p>nb: {friendList.length}</p>
            <button onClick={() => setFriendList(myFriends)}>reset</button>
            <hr/>
            {friendList.map(friend=> <div style={{display: "flex"}}>
                <HelloTo name={friend}/>
                <button  className={buttonStyle} onClick={() => removeFriend(friend)}>remove friend</button>
            </div>)}

            <div>
                <input type="text" onChange={e => setNewFriend(e.target.value)}/>
                <button onClick={() => addFriend()}>add</button>
            </div>
        </div>
    )
};

