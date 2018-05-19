import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TodoList = styled.div`
  width: 360px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;

class  App extends React.Component {
  state = {
    title: 'todo-list',
    showInput: false,
    isMobile: false,
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

  updateWindowDimensions = () => this.setState({ isMobile: window.innerWidth <= 1200})

  componentDidMount() {
    if (window.innerWidth <= 1200) this.setState({ isMobile: true })
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

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
      <Container>
          <TodoList>
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
          </TodoList>
      </Container>
    );
  }
}

export default App;
