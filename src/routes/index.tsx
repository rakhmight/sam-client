import { Route, Routes } from 'react-router-dom'
import Messenger from '../views/messenger/Messenger'
import Auth from '../views/auth/Auth'
import Block from '../views/block/Block'

const AppRoutes = () => (
  <Routes>
    <Route path='*' element={<Messenger />} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/block' element={<Block />} />
  </Routes>
)

export default AppRoutes