import React from 'react';
import { root } from '../../index'

export default function Hello() {

    const [count, setCount] = React.useState(0)
    const [word, setWord] = React.useState('S')
    const [autoCount, setAutoCount] = React.useState(0)
    const [manualCount, setManualCount] = React.useState(0)

    React.useEffect(() => {
        console.log('Start')

        let timer = setInterval(() => {
            setAutoCount(count => count + 1)
        }, 1000)

        return () => {
            console.log('Start-End')
            clearInterval(timer)
        }
    }, [])

    React.useEffect(() => {
        console.log('Update')

        setManualCount(count => count + 2)

        return () => {
            console.log('Update-End')
        }

    }, [count])

    const input = React.useRef()

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => { setCount(count => count + 1) }}>+</button>
            <hr />
            <h2>Word: {word}</h2>
            <button onClick={() => { setWord(word => word + 'S') }}>+S</button>
            <hr />
            <h2>AUTO-Count: {autoCount}</h2>
            <button onClick={() => { root.unmount() }}>Release</button>
            <hr />
            <h2>Manual-Count: {manualCount}</h2>
            <hr />
            <input ref={input} type="text" />
            <button onClick={() => { alert(input.current.value) }}>Show Alert</button>
        </div>
    )
}