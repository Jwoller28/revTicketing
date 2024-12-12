import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentOne from './Components/ComponentOne/ComponentOne';
import EventsDemo from './Components/Events/EventsDemo';
import ListDemo from './Components/ListDemo/ListDemo';
import ParentComponent from './Components/PropsDemo/ParentComponent/ParentComponent';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HooksDemo from './Components/Hooks/HooksDemo';

function App() {
  return (
    <div className="App">
      {/* <ComponentOne/> */}
      {/* <EventsDemo/> */}
      {/* <ListDemo/> */}
      {/* <ParentComponent/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsDemo/>}></Route>
        <Route path="/lists" element={<ListDemo/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
        <Route path="/hooks" element={<HooksDemo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
