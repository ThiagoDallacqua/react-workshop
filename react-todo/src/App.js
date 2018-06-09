import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import Provider from './Context'
import Colors from './colors'

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TodoList = styled.div`
  width: 360px;
  box-shadow: 0 0 3px ${Colors.box_shadow};
  background: ${Colors.input_background};
`;

class  App extends React.Component {
  state = {
    title: 'todo-list',
    showInput: false,
    todos: [
      {
        title: 'Go to potions class',
        id: Math.floor(Math.random() * 100)
      },
      {
        title: 'Buy new robes',
        id: Math.floor(Math.random() * 100)
      },
      {
        title: 'Visit Hagrid',
        id: Math.floor(Math.random() * 100)
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
    const todos = this.state.todos.filter(element => element.title !== item.title)

    this.setState({ todos })
  }

  render() {
    const { title, showInput, todos } = this.state

    return (
      <Provider>
        <Container>
            <TodoList>
              <Header
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
                removeTodo={this.removeTodo}
              />
            </TodoList>
        </Container>
      </Provider>
    );
  }
}

export default App;
