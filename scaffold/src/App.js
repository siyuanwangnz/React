import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: 'A', done: true },
      { id: '002', name: 'B', done: false },
      { id: '003', name: 'C', done: true }]
  }

  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] })
  }
  changeTodo = (id, done) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) return { ...item, done }
        else return item
      })
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.id !== id
      })
    })
  }
  checkAllTodo = (flage) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        return { ...item, done: flage }
      })
    })
  }

  clearAllDone = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.done !== true
      })
    })
  }
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo} />
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>

    )
  }
}
