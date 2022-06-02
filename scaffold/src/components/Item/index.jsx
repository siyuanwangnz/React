import React, { Component } from 'react'
import item from './index.module.css'

export default class Item extends Component {

    state = { mouseIn: false }
    handleMouse = (flage) => {
        return () => {
            this.setState({ mouseIn: flage })
        }
    }
    handleCheck = (id) => {
        return (event) => {
            this.props.changeTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        if (window.confirm('Sure?')) this.props.deleteTodo(id)
    }
    render() {
        return (
            <li style={{ backgroundColor: this.state.mouseIn ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={this.props.done} onChange={this.handleCheck(this.props.id)} />
                    <span>{this.props.name}</span>
                </label>
                <button onClick={() => this.handleDelete(this.props.id)} className="btn btn-danger" style={{ display: this.state.mouseIn ? 'block' : 'none' }}>Delete</button>
            </li>
        )
    }
}
