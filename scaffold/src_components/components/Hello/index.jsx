import React, { PureComponent, Fragment } from 'react';
import hello from './index.module.css'

//PureComponent
//Error Boundary
export default class Hello extends PureComponent {

    static getDerivedStateFromError(error) {
        return { hasError: error }
    }

    componentDidCatch() {
        console.log("Error")
    }

    state = { title: 'Hello', hasError: '' }

    render() {
        console.log('Hello')
        return (
            <div className="form">
                <h2 className={hello.title}>{this.state.title}</h2>&nbsp;&nbsp;
                <button onClick={() => this.setState({ title: 'hello' })}>change title</button>
                {this.state.hasError ? <h2>Error</h2> : <Hello2 />}
            </div>
        )
    }
}

class Hello2 extends PureComponent {
    // state = {
    //     msg: [
    //         { name: 'A', age: 10 },
    //         { name: 'B', age: 5 },
    //         { name: 'C', age: 15 },
    //     ]
    // }
    state = {
        msg: "sad"
    }
    render() {
        console.log('Hello2')
        return (
            <div className="form">
                <h2 >Hello2</h2>
                {
                    this.state.msg.map((obj) => {
                        return (
                            <h4>name: {obj.name}, age: {obj.age}</h4>
                        )
                    })
                }
            </div>
        )
    }
}
