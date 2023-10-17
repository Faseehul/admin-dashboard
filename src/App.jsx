import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Income from './pages/Income'
import Promote from './pages/Promote'
import Help from './pages/Help'
import Profile from './pages/Profile'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="income" element={<Income />} />
                    <Route path="promote" element={<Promote />} />
                    <Route path="help" element={<Help />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
