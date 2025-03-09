import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "./css/tailwindcss/tailwind.css";

function App() {
  // firebase Auth가 인증되었으면 true
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log(isAuthenticated);
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/todo-list-v2/" element={<Main />} />
            <Route path="/todo-list-v2/login" element={<Login />} />
            <Route path="/todo-list-v2/signup" element={<SignUp />} />
            <Route path="*" element={<Main />} />
          </>
        ) : (
          <>
            <Route path="/todo-list-v2/login" element={<Login />} />
            <Route path="/todo-list-v2/signup" element={<SignUp />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
      <button onClick={() => setIsAuthenticated((prev) => !prev)}></button>
    </>
  );
}

export default App;
