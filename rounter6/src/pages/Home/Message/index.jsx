import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

    const [messages] = React.useState([
        { id: '01', title: 'message01' },
        { id: '02', title: 'message02' },
        { id: '03', title: 'message03' }
    ])

    const navigate = useNavigate()

    return (
        <div className='form'>
            <ul>
                {
                    messages.map((msg) => {
                        return (
                            <li key={msg.id}>
                                <Link to='info' replace state={{ id: msg.id, title: msg.title }}>{msg.title}</Link>
                                <button onClick={() => {
                                    navigate('info', {
                                        replace: false,
                                        state: { id: msg.id, title: msg.title },
                                    })
                                }}>go to (push)</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div >
    )
}
