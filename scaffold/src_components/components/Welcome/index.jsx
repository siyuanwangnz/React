import React, { Component } from 'react'

// render props
export default class Welcome extends Component {
    render() {
        return (
            <div className='form'>
                <h2 >Welcome</h2>
                <Welcome2 render={(msg) => <Welcome3 msg={msg} />} />
            </div>
        )
    }
}

class Welcome2 extends Component {
    render() {
        return (
            <div className='form'>
                <h2>Welcome2</h2>
                {this.props.render("from Welcome2")}
            </div>
        )
    }
}

class Welcome3 extends Component {
    render() {
        return (
            <div className='form'>
                <h2 >Welcome3</h2>
                <h3 >msg: {this.props.msg}</h3>
            </div>
        )
    }
}