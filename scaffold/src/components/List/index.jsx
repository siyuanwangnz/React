import React, { Component } from 'react'
import Item from '../Item'
import list from './index.module.css'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        return (
            <ul className={list.list}>
                {
                    this.props.todos.map(item => {
                        return (
                            <Item key={item.id} {...item} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo}></Item>
                        )
                    })
                }
            </ul>
        )
    }
}
