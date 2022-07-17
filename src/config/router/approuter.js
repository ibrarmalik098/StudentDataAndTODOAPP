import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "../../pages/dashboardscreens/edit";
import Form from "../../pages/form";
import Login from "../../pages/login";
import MainLayout from "../../pages/mainlayout";
import QuizApp from "../../pages/quiz";
import TodoApp from "../../TodoApp/todo_App";
// import TeachersForm from "../../pages/teachersform";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="main" element={<MainLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="form" element={<Form />} />
        <Route path="quiz" element={<QuizApp />} />
        <Route path="edit" element={<Edit />} />
        <Route path="/" element={<TodoApp />} />
      {/* <Route path="/form" element={<TeachersForm />} /> */}
      </Routes>
    </Router>
  );
}
