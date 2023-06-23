import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App.js";
import GlobalStyles from "./Components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from 'react-auth-kit'
import { TransactionProvider } from "~/Context/TransactionContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GlobalStyles>
        <AuthProvider authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={false}>
            <TransactionProvider>
                <App></App>
            </TransactionProvider>


        </AuthProvider>
    </GlobalStyles >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
