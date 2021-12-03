import React from "react";

const ChatMessage = (props) => {
    const msg = props.msg
    const messageClass = msg.sender === 'user' ? 'sent' : 'received';
    const trailerClass = msg.sender === 'user' ? 'trailersent' : 'trailerreceived';
    return (
        <div className={`messageCol`}>
            <div className={`message ${messageClass}`}>
                <p>{msg.text}</p>
            </div>
            <div className={` ${trailerClass}`}>
                {msg.sender === 'user' && <p className="timestamp"> {msg.timestamp} </p>}
                {msg.trailers && msg.trailers.map((e) => (

                    <p>{e}</p>
                ))}
            </div>

        </div>
    );
}

export default ChatMessage;