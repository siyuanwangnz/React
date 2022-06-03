import React, { Component } from 'react'
import list from './index.module.css'

export default class List extends Component {
    render() {
        return (
            <ul className={list.list}>
                <div>
                    <a href="" target="_blank" rel="noreferrer">
                        <img alt="Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU" />
                    </a>
                    <p>Name</p>
                </div>
                <div>
                    <a href="" target="_blank" rel="noreferrer">
                        <img alt="Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU" />
                    </a>
                    <p>Name1</p>
                </div>
            </ul>
        )
    }
}
