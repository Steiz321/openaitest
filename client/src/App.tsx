import React, {useEffect, useState} from "react";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import './App.css'
import send from './assets/send.svg'
import IMessage from "./types/message.type";
import axios from 'axios';

const App = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [prompt, setPrompt] = useState<string>('');

    useEffect(() => {
        console.log('from effect');
        console.log(messages);
    }, [messages])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(prompt === '') {
            throw new Error('empty string!');
        }

        setMessages(prev => [...prev, {isAi: false, message: prompt}]);
        setPrompt('');

        const article = { prompt };
        const response = await axios.post('http://localhost:5000/api', article);
        console.log(response.data.message)
        setMessages(prev => [...prev, {isAi: true, message: response.data.message}]);
    }

    return (
        <div className='wrapper'>
            <MessageContainer messages={messages}/>
            <div className='messageArea'>
                <form className='form' onSubmit={handleSubmit}>
                    <textarea
                        className='messageInput'
                        onChange={(event) => setPrompt(event.target.value)}
                        value={prompt}
                    />
                    <button className='button' type='submit'><img src={send} /></button>
                </form>
            </div>
        </div>
    );
}

export default App;
