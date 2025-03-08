import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Home from "./pages/home/Home"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element = {<Login/>}
        >
        </Route>
        <Route
          path="/register"
          element = {<Register />}
        >
        </Route>
        <Route
          path = "/fabook"
          element = {<Home />}
        >
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
