import { useState,useEffect } from 'react'
import { ChatInput } from './components/Chatinput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

function App() {
 const [chatMessages, setChatMessages] = useState(() => {
  const savedMessages = localStorage.getItem('chatMessages');

  if (savedMessages) {
    return JSON.parse(savedMessages).map(message => ({
      ...message,
      time: new Date(message.time)
    }));
  }
  return [
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: crypto.randomUUID(),
      time: new Date()
    }
  ];
  });
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      'chatMessages',
      JSON.stringify(chatMessages)
    );
  }, [chatMessages]);


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
  <div className={darkMode ? "app-container dark-mode" : "app-container"}>

    <button
      className="dark-mode-button"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>

    <ChatMessages
      chatMessages={chatMessages}
      isTyping={isTyping}
    />

    <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      clearChat={clearChat}
      setIsTyping={setIsTyping}
    />

  </div>
);
}
export default App
