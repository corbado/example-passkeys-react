import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Corbado from "@corbado/webcomponent";

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
    const session = new Corbado.Session(CORBADO_PROJECT_ID);
        session.refresh(user => {
            setUser(user);
        });
    }, []);

    const session = new Corbado.Session(CORBADO_PROJECT_ID);
    const handleLogout = () => {
        session.logout()
            .then(async () => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    const redirectToHome = () => {
        navigate("/");
    }

    if (user) {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>
                    User-ID: {user.userID}
                    <br />
                    Email: {user.email}
                </p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You're not logged in.</p>
                <p>Please go back to <a href="#/" onClick={redirectToHome}>home</a> to log in.</p>
            </div>
        );
    }
}

export default Profile;