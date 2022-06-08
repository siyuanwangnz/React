import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h2>React router demo</h2>
                <button onClick={this.props.history.goBack}>back</button>
                <button onClick={this.props.history.goForward}>forward</button>
            </div>
        )
    }
}
export default withRouter(Header)
