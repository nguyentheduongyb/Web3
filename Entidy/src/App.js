import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit'
import { publicRoutes } from "~/Routes";
import { AuthProvider } from 'react-auth-kit'
import { DefaultLayout } from "~/Layout";
import { TransactionProvider } from "~/Context/TransactionContext"
import LoginProvider from "./Context/LoginContext";

function App() {
    return (
        <AuthProvider authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={false}>
            <Router>
                <LoginProvider>
                    <TransactionProvider>
                        <div className="dark:text-white">
                            <Routes>
                                {publicRoutes.map((route, index) => {
                                    let Layout = DefaultLayout;

                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }
                                    const Page = route.component;
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                            </Routes>
                        </div>
                    </TransactionProvider>
                </LoginProvider>
            </Router>
        </AuthProvider >

    );
}
export default App;
