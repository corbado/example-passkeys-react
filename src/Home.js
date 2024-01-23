import "./App.css"
import React from "react"
import { CorbadoAuth } from "@corbado/react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const onLoggedIn = () => {
        navigate('/profile')
    }

    return (
        <div className='Auth' style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <CorbadoAuth
                onLoggedIn={onLoggedIn}
            />
        </div>
    )
}