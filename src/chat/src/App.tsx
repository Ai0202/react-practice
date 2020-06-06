import React from 'react';
import './App.css';
import Sidebar from "./containers/Sidebar";
import MessageList from "./containers/MessageList";
import AddMessage from "./containers/AddMessage";

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessageList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
