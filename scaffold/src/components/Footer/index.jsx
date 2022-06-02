import React, { Component } from 'react'
import footer from './index.module.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }
    handleCheckAll = (event) => {
        if (event.target.checked) this.props.checkAllTodo(true)
        else this.props.checkAllTodo(false)
    }
    handleClearAllDone = () => {
        this.props.clearAllDone();
    }
    render() {
        const all = this.props.todos.length
        const done = this.props.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        return (
            <div className={footer.footer}>
                <label>
                    <input type="checkbox" checked={done === all && all !== 0 ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>Done: {done}</span> / All: {all}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear Finished Task</button>
            </div>
        )
    }
}
