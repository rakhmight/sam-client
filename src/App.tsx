import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routes'
import Titlebar from "@/components/structures/titlebar/Titlebar"
import Layout from './components/layouts/general/Layout';
import './assets/css/global.css'

function App() {

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
