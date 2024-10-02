import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequest";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            {
                path: '/job/:id',
                element: (<PrivateRoutes>
                    <JobDetails />
                </PrivateRoutes>),
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path: '/update/:id',
                element: (<PrivateRoutes>
                    <UpdateJob />
                </PrivateRoutes>),
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path: '/add-job',
                element: (<PrivateRoutes>
                    <AddJob />
                </PrivateRoutes>)
                ,

            },
            {
                path: '/my-posted-jobs',
                element: (<PrivateRoutes>
                    <MyPostedJobs />
                </PrivateRoutes>),

            },
            {
                path: '/my-bids',
                element: (<PrivateRoutes>
                    <MyBids />
                </PrivateRoutes>),

            },
            {
                path: '/bid-requests',
                element: (<PrivateRoutes>
                    <BidRequests />
                </PrivateRoutes>),

            },
        ],
    },
])

export default router