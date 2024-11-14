import { HelmetProvider } from "react-helmet-async"
import Router from "./router/Router"

const App = () => {
  return (
    <>
      <HelmetProvider>
        <div className="container mx-auto px-2">
          <Router />
        </div>
      </HelmetProvider>
    </>
  )
}

export default App