import React from "react";
import IMessage from "../../types/message.type";
import './Message.css';
import bot from '../../assets/bot.svg';
import user from '../../assets/user.svg'

const Message: React.FC<IMessage> = ({isAi, message}: IMessage) => (
  <div className={`messageWrapper ${isAi ? 'ai' : 'user'}`}>
      <div className='messageContainer'>
          <div className={`icon ${isAi ? 'aiIcon' : 'userIcon'}`}><img src={isAi ? bot : user} /></div>
          <p className='text'>{message}</p>
      </div>
  </div>
);

export default Message;
