import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <h2>React router demo</h2>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate(1)}>forward</button>
        </div>
    )
}
