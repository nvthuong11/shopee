import { useEffect, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import useRouterElements from './useRouterElements'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouterElements()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <div>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
