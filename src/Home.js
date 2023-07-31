import './App.css';
import React, {useCallback, useEffect, useState} from 'react';
import Corbado from '@corbado/webcomponent'
import '@corbado/webcomponent/pkg/auth_cui.css'

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

function Home() {
    const session = new Corbado.Session(CORBADO_PROJECT_ID);


    useEffect(() => {
        session.refresh(user => {
        });
    }, [session]);


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
