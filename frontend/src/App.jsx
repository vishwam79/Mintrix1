import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Chat from "./Pages/chat/chat.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define separate routes for Home and Chat */}
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
