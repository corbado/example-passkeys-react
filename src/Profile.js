import {useNavigate} from "react-router-dom"
import {useCorbadoSession, useCorbado} from "@corbado/react"

export default function Profile() {
    const navigate = useNavigate()
    const {isAuthenticated, user, logout} = useCorbado();

    const redirectToHome = () => {
        navigate("/")
    }
    const handleLogout = () => {
        logout()
        redirectToHome()
    }

    if (!isAuthenticated || !user) {
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
    } else {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>
                    User-ID: {user.sub}
                    <br/>
                    Email: {user.email}
                </p>
                <button onClick={handleLogout}>Logout</button>
            </div>

        )
    }
}
