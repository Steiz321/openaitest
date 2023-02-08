import React from 'react';
import './MessageContainer.css';
import IMessage from "../../types/message.type";
import Message from "../Message/Message";

interface MessagesProps {
    messages: IMessage[];
}

const MessageContainer: React.FC<MessagesProps> = ({messages}: MessagesProps) => {
    return (
        <div className='messagesWrapper'>
            {messages.map(el => (
                <Message key={Math.random()*1000} isAi={el.isAi} message={el.message}/>
            ))}
        </div>
    );
}

export default MessageContainer;
