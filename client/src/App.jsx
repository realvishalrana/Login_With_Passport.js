import { Navbar } from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

// .input-1 {
//   width: 200px;
//   padding: 15px 20px;
//   margin-bottom: 20px;
// }

// .line {
//   /* width: 0.5px;
//   height: 70%;
//   background-color: lightgray;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   z-index: -1; */
//   border-left: 0.5px solid lightgray;
//   height: 300px;
//   position: absolute;
//   left: 50%;
//   z-index: -1;
// }
