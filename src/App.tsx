import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Titlebar from "./components/Titlebar"
import './assets/css/global.css'

function App() {

  return (
    <BrowserRouter>
      <div className="root">
        <Titlebar/>
              
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App;
