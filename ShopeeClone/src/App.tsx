import { ToastContainer } from 'react-toastify'
import useRouterElements from './useRouterElements'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouterElements()
  return (
    <div>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
