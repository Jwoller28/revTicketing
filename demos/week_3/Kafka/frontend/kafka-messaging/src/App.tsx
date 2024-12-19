import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

function App() {
  return (
    <div className="App">
      <h1>Kafka messaging System</h1>
      <MessageInput/>
      <MessageList/>
    </div>
  );
}

export default App;
