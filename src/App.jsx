import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { ToastContainer } from "react-toastify"
import PrivateRoute from "./store/PrivateRoute"
import {users} from "./constants/label"


import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Home from "./pages/Home"
import Layout from "./pages/layout/Layout"
import Friends from "./pages/Friends"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element = {
              <Login/>
          }
        >
        </Route>
        <Route
          path="/register"
          element = {
              <Register />
          }
        >
        </Route>
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path={users.HomePage.key} element={<Home />} />
          <Route path={users.Friend.key} element={<Friends/>} />
        </Route>


      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
