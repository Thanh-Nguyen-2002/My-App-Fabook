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
import FriendsHome from "./components/friends/FriendsHome"
import FriendRequest from "./components/friends/FriendRequests"
import Suggestions from "./components/friends/FriendSuggestions";
import AllFriends from "./components/friends/AllFriends";
import Birthdays from "./components/friends/Birthdays";
import CustomList from "./components/friends/CustomList";

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

          <Route path={users.Friend.key} element={<Friends />}>
            <Route index element={<FriendsHome />} />
            <Route path="requests" element={<FriendRequest/>} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="all-friends" element={<AllFriends />} />
            <Route path="birthdays" element={<Birthdays />} />
            <Route path="custom-list" element={<CustomList />} />
          </Route>
        </Route>


      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
