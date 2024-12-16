import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentOne from "./Components/ComponentOne/ComponentOne";
import EventsDemo from "./Components/Events/EventsDemo";
import ListDemo from "./Components/ListDemo/ListDemo";
import ParentComponent from "./Components/PropsDemo/ParentComponent/ParentComponent";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HooksDemo from "./Components/Hooks/HooksDemo";
import UserManagement from "./Components/FormInput/SmartComponent/UserManagement";
import { AuthProvider, UserProvider } from "./Components/Context/UserContext";
import Counter from "./Testing/Counter/Counter";
import Component from "./Testing/Mocking/Component";
import Home from "./Components/pages/Home";
import Dashboard from "./Components/pages/Dashboard";
import RouteGuard from "./Components/RouteGuardComponent/RouteGuard";
import BasicAxios from "./Components/Axios/BasicAxios";
import PostAxios from "./Components/Axios/PostAxios";

function App() {
  return (
    <div className="App">
      {/* <ComponentOne/> */}
      {/* <EventsDemo/> */}
      {/* <ListDemo/> */}
      {/* <ParentComponent/> */}

      {/* <BasicAxios/> */}
      <PostAxios/>

      <AuthProvider>
      <UserProvider>
        {/* <Counter/> */}
        {/* <Component/> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={
              <RouteGuard>
                <Dashboard />
              </RouteGuard>
            }
          ></Route>
          <Route path="/events" element={<EventsDemo />}></Route>
          <Route path="/lists" element={<ListDemo />}></Route>
          <Route path="/props" element={<ParentComponent />}></Route>
          <Route path="/hooks" element={<HooksDemo />}></Route>
          <Route path="/login" element={<UserManagement />}></Route>
        </Routes>
      </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
