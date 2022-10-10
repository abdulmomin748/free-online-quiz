import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quize from "../components/LoadQuize";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";
import { quizCategory } from "../loaders/loader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: quizCategory,

        children: [
            {path: '/', element: <Home />},
            {path: '/home', element: <Home />},
            {
                path: '/quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quize />,
                
            },
            {path: '/topics', element: <Topics />},
            {path: '/statistics', element: <Statistics />},
            {path: '/blog', element: <Blog />},
            {path: '/about', element: <About />},
        ]
    }
]);
export default router;
















