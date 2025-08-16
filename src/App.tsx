import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import SelectTravel from "./page/select-travel.page.tsx";
import TravelPage from "./page/travel.page.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <SelectTravel/>,
        },
        {
            path: '/travel',
            element: <TravelPage/>,
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App
