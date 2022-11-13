import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <LandingPage />,
            children: [{ index: true }],
        },

    ]);
    return element;
}
export default AppNavigation;
