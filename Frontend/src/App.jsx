import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Bookk/Books";
import Students from "./components/Studentt/Students";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/Studentt/AddStudent";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/Bookk/AddBook";
import EditBook from "./components/Bookk/EditBook";
import DeleteBook from "./components/Bookk/DeleteBook";
import BuyBook from "./components/Bookk/BuyBook";
import DeleteStudent from "./components/Studentt/DeleteStudent";
import EditStudent from "./components/Studentt/EditStudent";

function App() {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/students" element={<Students role={role} />}></Route>
        <Route path="/books" element={<Books role={role} />}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/book/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<DeleteBook />}></Route>
        <Route path="/buy/:id" element={<BuyBook />}></Route>
        <Route path="/student/:id" element={<EditStudent />}></Route>
        <Route path="/deletee/:id" element={<DeleteStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
