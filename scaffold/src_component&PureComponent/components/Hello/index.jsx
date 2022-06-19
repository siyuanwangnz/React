import React, { PureComponent } from 'react';
import hello from './index.module.css'

export default class Hello extends PureComponent {
    state = { title: 'Hello' }
    render() {
        console.log('Hello')
        return (
            <div>
                <h2 className={hello.title}>{this.state.title}</h2>&nbsp;&nbsp;
                <button onClick={() => this.setState({ title: 'hello' })}>change</button>
                <Hello2 />
            </div>
        )
    }
}

class Hello2 extends PureComponent {
    render() {
        console.log('Hello2')
        return (
            <h2 >Hello2</h2>
        )
    }
}
