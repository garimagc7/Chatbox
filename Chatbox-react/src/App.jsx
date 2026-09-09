import { useState } from 'react'
import { ChatInput } from './components/Chatinput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: crypto.randomUUID(),
      time: new Date()
    }
  ]);

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
