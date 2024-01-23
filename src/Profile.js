import { useNavigate } from "react-router-dom"
import { useCorbado } from "@corbado/react"

export default function Profile() {
    const navigate = useNavigate()
    const { shortSession, user, logout } = useCorbado()

    const redirectToHome = () => {
        navigate("/")
    }
    const handleLogout = () => {
        logout()
        redirectToHome()
    }

    if (user && shortSession) {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>
                    User-ID: {user.sub}
                    <br />
                    Email: {user.email}
                </p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You're not logged in.</p>
                <p>
                    Please go back to{" "}
                    <a href='/' onClick={redirectToHome}>
                        home
                    </a>{" "}
                    to log in.
                </p>
            </div>
        )
    }
}
