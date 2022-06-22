import React from 'react'
import { useLocation } from 'react-router-dom'

const Data = [
    { id: '01', content: 'This is 01' },
    { id: '02', content: 'This is 02' },
    { id: '03', content: 'This is 03' }
]

export default function Info() {
    const location = useLocation()
    return (
        <ul>
            <li>ID: {location.state.id}</li>
            <li>TITLE: {location.state.title}</li>
            <li>CONTENT: {Data.find((obj) => {
                return obj.id === location.state.id
            }).content}</li>
        </ul>
    )
}
