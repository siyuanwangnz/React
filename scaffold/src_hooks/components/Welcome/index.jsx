import React from 'react'

//Context
const MyContext = React.createContext()
export default function Welcome() {
    const [msg] = React.useState({ owner: 'Welcome', content: 'msg' })
    return (
        <div className="form" style={{ backgroundColor: 'orange' }}>
            <h2>Welcome</h2>
            <h4>send: {msg.content} from {msg.owner}</h4>
            <MyContext.Provider value={{ owner: msg.owner, content: msg.content }}>
                <Welcome2 />
            </MyContext.Provider>
        </div>
    )
}

function Welcome2() {
    return (
        <div className="form" style={{ backgroundColor: 'green' }}>
            <h2>Welcome2</h2>
            <Welcome3 />
        </div>
    )
}

function Welcome3() {
    return (
        <div className="form" style={{ backgroundColor: 'grey' }}>
            <h2>Welcome3</h2>
            <MyContext.Consumer>
                {
                    value => (<h4>get: {value.content} from {value.owner}</h4>)
                }
            </MyContext.Consumer>
        </div>
    )
}