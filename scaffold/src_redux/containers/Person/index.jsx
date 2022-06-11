import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux';
import { add } from '../../redux/personSlice';

class Person extends Component {
  render() {
    return (
      <div className='form'>
        <input ref={c => this.nameNode = c} type="text" placeholder="name" />&nbsp;&nbsp;
        <input ref={c => this.ageNode = c} type="text" placeholder="age" />&nbsp;&nbsp;
        <button onClick={() => {
          this.props.add({ id: nanoid(), name: this.nameNode.value, age: Number(this.ageNode.value) || 0 })
          this.nameNode.value = ''
          this.ageNode.value = ''
        }}>add</button>
        <ul>
          {
            this.props.personList.map((p) => {
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
        <h2>Above Count: {this.props.count}</h2>
      </div>
    )
  }
}
export default connect(
  state => ({
    count: state.counter.value,
    personList: state.person.personList,
  }),
  { add }
)(Person)