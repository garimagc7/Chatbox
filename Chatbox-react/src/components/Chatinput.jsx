import { useState } from 'react'

const Chatbot = {
  getResponse(inputText) {
    const message = inputText.toLowerCase();

    if (message === 'hello' || message === 'hi') {
        return 'Hello! How can I help you?';
    }

    return 'Sorry, I do not understand that.';
  }
}; 
export function ChatInput( { chatMessages, setChatMessages}){
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
        id: crypto.randomUUID()
        }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
        ...newChatMessages,
        {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
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
        </div>
    );    
}