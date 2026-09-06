import { useState } from 'react'
import { ChatInput } from './components/Chatinput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1',
    time: new Date()
    }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2',
    time: new Date()
    }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3',
    time: new Date()
    }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4',
    time: new Date()
    }]);

    function clearChat() {
    setChatMessages([
        {
            message: 'Hello! How can I help you?',
            sender: 'robot',
            id: crypto.randomUUID(),
            time: new Date()
        }
    ]);
    }

    return (
      <div className = "app-container">
        <ChatMessages
          chatMessages={chatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          clearChat = { clearChat }
        />
      </div>
    );
}
export default App
