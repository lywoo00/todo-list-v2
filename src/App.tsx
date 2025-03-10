import { useEffect, useState } from "react";
import { auth } from "./firebaseApp";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { ToastContainer } from "react-toastify";
import "./css/tailwindcss/tailwind.css";

function App() {
  //auth를 체크하기 전에 loader 띄워주기
  const [init, setInit] = useState<boolean>(false);

  // firebase Auth가 인증되었으면 true
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init && (
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/todo-list-v2/" element={<Main />} />
              {/* <Route path="/todo-list-v2/login" element={<Login />} />
              <Route path="/todo-list-v2/signup" element={<SignUp />} /> */}
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
      )}
    </>
  );
}

export default App;
