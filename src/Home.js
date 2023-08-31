import './App.css';
import React from 'react';
import '@corbado/webcomponent/pkg/auth_cui.css';
import '@corbado/webcomponent';


function Home() {
    return (
        <div className="App">

    <header>
    <nav className="nav container">
      <h1 className="text-display-3"><img src="https://uploads-ssl.webflow.com/626a572dd59ab59d107b26c6/6285290cdc476312ea882af9_Corbado%20Wort-Bildmarke.svg" width={150}/></h1>
      <div>
      <a href="/login">
        <button className="btn btn-ghost sign-in-btn">
Login         </button>
 </a>
      </div>
    </nav>
  </header>

  <div className="container">
        <h1 className="App-intro">
         <b> Auth with <a href="javascript:void(0)" class="link-blue">React</a> and <a href="https://www.corbado.com/" class="link-blue"> Corbado </a> 👋🏽</b>
        </h1>
        <a href="https://docs.corbado.com/">
               <button className="btn btn-dark doc-btn">
Read docs         </button>
 </a>
        </div>
  
</div>

    );
    }
    export default Home;