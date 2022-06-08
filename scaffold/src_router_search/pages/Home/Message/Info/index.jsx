import React, { Component } from 'react'
import qs from 'querystring'

const Data = [
    { id: '01', content: 'This is 01' },
    { id: '02', content: 'This is 02' },
    { id: '03', content: 'This is 03' }
]

export default class Info extends Component {
    render() {
        return (
            <ul>
                <li>ID: {qs.parse(this.props.location.search.slice(1)).id}</li>
                <li>TITLE: {qs.parse(this.props.location.search.slice(1)).title}</li>
                <li>CONTENT: {Data.find((obj) => {
                    return obj.id === qs.parse(this.props.location.search.slice(1)).id
                }).content}</li>
            </ul>
        )
    }
}
