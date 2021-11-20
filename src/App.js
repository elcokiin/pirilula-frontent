import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Login from './pages/Login.jsx'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
)

export default App
