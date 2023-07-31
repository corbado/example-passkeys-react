import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Corbado from "@corbado/webcomponent";

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

function LoggedIn() {
    const session = new Corbado.Session(CORBADO_PROJECT_ID);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        session.refresh(user => {
            if (user === null) {
                console.log("You're not authenticated")
            } else {
                setUser(user);
            }
        });
    }, [session]);

    async function handleLogout() {
        await session.logout();
        navigate("/");
    }


    return (
        <div>
            {user &&
                <div>
                    <p>You are logged in with {user.email} (userID: {user.userID}).</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            }
            {
                !user &&
                <p>You're not authenticated</p>
            }
        </div>
    );
}

export default LoggedIn;
