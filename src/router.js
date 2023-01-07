import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}>
                <Route 
                    path="" 
                    element={<Home/>}
                />
                <Route 
                    path="about"
                    element={<About/>}
                />
                <Route 
                    path="stocks/:symbol"
                    element={<Stock/>}
                />
                <Route
                    path="stocks"
                    element={<Dashboard/>} 
                />
        </Route>
    )
)

export default router