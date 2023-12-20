import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";
import { MyLearning } from "./pages/MyLearning/MyLearning";
import { Profile } from "./pages/Profile/Profile";
import { Sttngs } from "./pages/Sttngs/Sttngs";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Sttngs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
