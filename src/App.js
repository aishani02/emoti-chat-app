import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Home'
import { GlobalContextProvider } from './GlobalContext'
import PrivateRoute from './PrivateRoute'
import UserChat from './UserChat'

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/home' element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/home/:id' element={<UserChat />} />
          </Route>
        </Routes>

        <ToastContainer />
      </GlobalContextProvider>
    </Router>
  )
}

export default App
