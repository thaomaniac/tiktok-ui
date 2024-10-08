import {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {publicRoutes} from "~/routes";
import {DefaultLayout} from "~/components/Layout";

function App() {
    return (<div className="App">
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout ?? (route.layout === null ? Fragment : DefaultLayout);
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>;
                })}
            </Routes>
        </Router>
    </div>);
}

export default App;
