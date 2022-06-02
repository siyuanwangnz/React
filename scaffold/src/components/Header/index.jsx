import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import header from './index.module.css'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        if (event.target.value.trim() === '') {
            alert('Can not empty')
            return
        }
        this.props.addTodo({ id: nanoid(), name: event.target.value, done: false })
        event.target.value = ''
    }
    render() {
        return (
            <div className={header.header}>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Enter content and then press enter" />
            </div>
        )
    }
}
