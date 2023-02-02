import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import {Main, SignIn, SignUp} from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
