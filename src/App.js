import React from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";
import { MyLearning } from "./pages/MyLearning/MyLearning";
import { Profile } from "./pages/Profile/Profile";
import { NotFound } from "./pages/NotFound/NotFound";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { CoursePage } from "./pages/CoursePage/CoursePage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
