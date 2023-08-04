import Messenger from '../views/Messenger'
import Auth from '../views/Auth'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => (
  <Routes>
    <Route path='*' element={<Messenger />} />
    <Route path='auth' element={<Auth />} />
  </Routes>
)

export default AppRoutes