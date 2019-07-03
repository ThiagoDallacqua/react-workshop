import React from 'react';
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'

import styles from './index.module.css'

class  App extends React.Component {
  state = {
    title: 'todo-list',
    showInput: false,
    isMobile: window.matchMedia('max-width: 1200px').matches,
    todos: [
      {
        todo: 'Go to potions class'
      },
      {
        todo: 'Buy new robes'
      },
      {
        todo: 'Visit Hagrid'
      }
    ]
  }

  openInput = () => this.setState({ showInput: !this.state.showInput })

  createTodo = todo => (
    this.setState({
      todos: [
        ...this.state.todos,
        todo
      ]
    }))

  removeTodo = item => {
    const todos = this.state.todos.filter(element => element.todo !== item.todo)

    this.setState({ todos })
  }

  render() {
    const { title, showInput, isMobile, todos } = this.state

    return (
      <div className={styles.container}>
          <div className={styles.todoList} >
            <Header
              isMobile={isMobile}
              title={title}
              openInput={this.openInput}
            />
            <CustomInput
              type='text'
              placeholder='Add New Todo'
              showInput={showInput}
              createTodo={this.createTodo}
            />
            <CustomList
              todos={todos}
              isMobile={isMobile}
              removeTodo={this.removeTodo}
            />
          </div>
      </div>
    );
  }
}

export default App;
