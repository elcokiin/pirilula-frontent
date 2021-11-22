import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Login from './pages/Login.jsx'
import EmailSendResetPassword from './pages/EmailSendResetPassword.jsx'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/email-send-reset-password" element={<EmailSendResetPassword />} />
    </Routes>
  </Router>
)

export default App
