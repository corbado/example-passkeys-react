import "./App.css"
import { CorbadoProvider } from "@corbado/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID

function App() {
    return (
        <div className='App'>
            <CorbadoProvider projectId={CORBADO_PROJECT_ID}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/profile' element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </CorbadoProvider>
        </div>
    )
}

export default App
