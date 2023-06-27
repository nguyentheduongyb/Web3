import { Fragment, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import { DefaultLayout } from "~/Layout";
import PreLoader from "~/Components/Page/PreLoader"
import { TransactionContext } from "~/Context/TransactionContext";
function App() {
    const { isLoading } = useContext(TransactionContext)
    return (
        <Router>
            <div className="dark:text-white">
                <PreLoader />
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
                                    <Layout title={route.title ? route.title : ''}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>

    );
}
export default App;
