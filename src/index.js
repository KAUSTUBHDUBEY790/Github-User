import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import Footer from './components/Footer';
//dev-hu38q1frl8b4k1v6.us.auth0.com
//HkkmwK2cyZOlVT25xj0fzp2g217bbHgv
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Auth0Provider domain='dev-hu38q1frl8b4k1v6.us.auth0.com' clientId='HkkmwK2cyZOlVT25xj0fzp2g217bbHgv' redirectUri={window.location.origin} cacheLocation='localstorage'>
    <GithubProvider>    <App /></GithubProvider>
    </Auth0Provider>
    <Footer/>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
