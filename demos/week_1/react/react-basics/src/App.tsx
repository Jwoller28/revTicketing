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
import UserManagement from './Components/FormInput/SmartComponent/UserManagement';
import { UserProvider } from './Components/Context/UserContext';
import { AuthProvider } from './Components/Context/ReducerUserContext';

function App() {
  return (
    <div className="App">
      {/* <ComponentOne/> */}
      {/* <EventsDemo/> */}
      {/* <ListDemo/> */}
      {/* <ParentComponent/> */}

      {/* <UserProvider> */}

      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ComponentOne/>}></Route>
          <Route path="/events" element={<EventsDemo/>}></Route>
          <Route path="/lists" element={<ListDemo/>}></Route>
          <Route path="/props" element={<ParentComponent/>}></Route>
          <Route path="/hooks" element={<HooksDemo/>}></Route>
          <Route path="/login" element={<UserManagement/>}></Route>
        </Routes>
      </AuthProvider>
      {/* </UserProvider> */}

    </div>
  );
}

export default App;
