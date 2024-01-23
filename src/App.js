import "./App.css"
import RouteProvider from "./Routes"
import { CorbadoProvider } from "@corbado/react"

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID

function App() {
    return (
        <div className='App'>
            <CorbadoProvider projectId={CORBADO_PROJECT_ID}>
                <RouteProvider />
            </CorbadoProvider>
        </div>
    )
}

export default App
