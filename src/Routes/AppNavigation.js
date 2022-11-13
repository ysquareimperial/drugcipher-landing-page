import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Page404 from "../LandingPage/Page404";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <LandingPage />,
            children: [{ index: true }],
        },
        {
            path: '*',
            element: <Page404/>
        }

    ]);
    return element;
}
export default AppNavigation;
