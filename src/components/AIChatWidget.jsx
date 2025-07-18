import React, { useState, useEffect, useRef } from 'react';
import '../css/AIChatWidget.css'; // Make sure this is linked

const AILogoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png'; 

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello, I\'m here to assist you.' },
    { type: 'ai', text: 'May I know your name?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const userMessage = { type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
  };

  return (
    <div className={`ai-chat-widget ${isOpen ? 'widget-open' : ''}`}>
      <button className="ai-chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comment-dots"></i>}
      </button>

      <div className="ai-chatbox">
        {/* --- NEW: The perfect close button, moved here for positioning --- */}
        <button 
          aria-label="Close chat" 
          className="chatbox-close-btn" 
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="chatbox-header">
          <div className="chatbox-header-info">
            <img src={AILogoUrl} alt="AI Assistant" />
            <strong>AI Assistant</strong>
          </div>
          <div className="chatbox-header-actions">
            <button aria-label="Refresh chat"><i className="fas fa-sync-alt"></i></button>
            {/* The old close button was removed from here */}
          </div>
        </div>
        <div className="chatbox-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbox-footer">
          <form className="chatbox-input-form" onSubmit={handleSendMessage}>
            <button type="button" className="attachment-button">
              <i className="fas fa-paperclip"></i>
            </button>
            <input
              type="text"
              placeholder="Type your answer"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="chatbox-branding">
            we run on <span>Smarter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatWidget;