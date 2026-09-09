import { useState } from 'react'

const Chatbot = {
  getResponse(inputText) {
    const message = inputText.toLowerCase().trim();

    if (message === 'hello' || message === 'hi' || message === 'hey') {
      return 'Hello! How can I help you?';
    }

    if (message.includes('how are you')) {
      return 'I am doing great! Thanks for asking.';
    }

    if (message.includes('your name')) {
      return 'I am your React chatbot.';
    }

    if (
      message.includes('date') ||
      message.includes("today's date") ||
      message.includes('todays date')
    ) {
      return `Today is ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}.`;
    }

    if (message.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      })}.`;
    }

    if (message.includes('thank')) {
      return "You're welcome!";
    }

    if (message.includes('bye')) {
      return 'Goodbye! Have a great day!';
    }

    return "Sorry, I don't understand that yet.";
  }
};

export function ChatInput( { chatMessages, setChatMessages, clearChat}){
    const [inputText, setInputText] =  useState('');

    function saveInputText(event) {
    setInputText(event.target.value);
    }

    function sendMessage() {
    if (inputText.trim() === '') {
      return;
    }
    const newChatMessages = [
        ...chatMessages,
        {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: new Date()
        }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
        ...newChatMessages,
        {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: new Date()
        }
    ]);

    setInputText('');
    }

    return(
        <div className = "chat-input-container">
        <input 
            className = "chat-input"
            placeholder="Send a message to chatbot" 
            size="40"
            onChange={saveInputText}
            value={inputText}
            onKeyDown={(event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }}}
        />
        <button 
            className = "send-button"
            onClick={sendMessage}
        >Send</button>
        <button 
            className="clear-button"
            onClick={clearChat}>
            Clear Chat
        </button>
        </div>
    );    
}