import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OnlineChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const defaultMessage = 'How can I assist you today?';
    setMessages([{ sender: 'ai', text: defaultMessage }]);
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await axios.post('https://codehub-6wrs.onrender.com/chat', { message: input });
      const aiMsg = { sender: 'ai', text: response.data.response };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Error: Could not retrieve response.' }]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Chat with <span style={{ color: '#FFA500' }}>AI</span></h1>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#FFA500' : '#333',
              color: msg.sender === 'user' ? '#000' : '#fff'
            }}
          >
            <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '20px'
  },
  chatBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    overflowY: 'auto',
    maxHeight: '60vh',
    padding: '10px',
    backgroundColor: '#eee',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  message: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '20px',
    lineHeight: '1.5',
    transition: 'all 0.3s ease-in-out'
  },
  inputArea: {
    display: 'flex',
    gap: '10px'
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  sendButton: {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  }
};

export default OnlineChatBot;
