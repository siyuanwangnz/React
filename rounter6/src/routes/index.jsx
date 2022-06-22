import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Home/Message'
import Info from '../pages/Home/Message/Info'
import News from '../pages/Home/News'
import { Navigate } from 'react-router-dom'

export default [
    {
        path: "/home", element: <Home />, children: [
            {
                path: "message", element: <Message />, children: [
                    { path: "info", element: <Info /> },
                ]
            },
            { path: "news", element: <News /> },
            { path: "", element: <Navigate to="news" /> },
        ]
    },
    { path: "/about", element: <About /> },
    { path: "/", element: <Navigate to="/about" /> },
]