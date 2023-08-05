import Messenger from '../views/Messenger'
import Auth from '../views/Auth'
import Block from '../views/Block'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => (
  <Routes>
    <Route path='*' element={<Messenger />} />
    <Route path='auth' element={<Auth />} />
    <Route path='block' element={<Block />} />
  </Routes>
)

export default AppRoutes