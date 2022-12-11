import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Auth, Main } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
