import './App.css'
import useRouterElements from './useRouterElements'

function App() {
  const routeElement = useRouterElements()
  return <div>{routeElement}</div>
}

export default App
