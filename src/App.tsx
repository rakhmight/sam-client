import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routes'
import Titlebar from "@/components/structures/titlebar/Titlebar"
import Layout from './components/layouts/general/Layout';
import './assets/css/global.css'

const App : FC = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Titlebar />
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App;
