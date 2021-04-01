import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'))
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [typingStatus, setTypingStatus] = useState('');

    useEffect(() => {
        return () => socket.disconnect(true);
    }, []);

    socket.on('messageSent', data => {
        setMessages([...messages, data]);
        setTypingStatus('');
    })

    socket.on('clientTyping', data => {
        setTypingStatus(data.message);
    })

    const submitHandler = e => {
        e.preventDefault();

        socket.emit('sendMessage', {username, message})
        setTypingStatus('');
        setMessage('');
    }

    const typingHandler = e => {
        setMessage(e.target.value);
        socket.emit('clientTyping', {message: `${username} is typing...`})
    }
    return (
        <>
            <input type="text" name="username" onChange={e => setUsername(e.target.value) } placeholder="username"/>
            <form onSubmit={ submitHandler }>
                <p>{typingStatus}</p>
                <input type="text" name="message" onChange={ typingHandler } value={ message }/>
                <input type="submit" value="Send"/>
            </form>
            <div>
                {
                    messages.map( (item, i) => 
                        <p key={i}>{item.username}: {item.message}</p>
                    )
                }
            </div>
        </>
    );
}

export default Chat