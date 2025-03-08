import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/login/Register'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element = {<Login/>}
        >
        </Route>
        <Route
          path="/register"
          element = {<Register />}
        >
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
