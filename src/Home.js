import './App.css';
import React from 'react';
import '@corbado/webcomponent/pkg/auth_cui.css';
import '@corbado/webcomponent';

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

function Home() {
    return (
        <div className="App">
            <corbado-auth project-id={CORBADO_PROJECT_ID} conditional="yes">
                <input name="username" id="corbado-username"
                       required autoComplete="webauthn"/>
            </corbado-auth>
        </div>
    );
}

export default Home;