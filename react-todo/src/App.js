import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import Provider from './Context'
import Colors from './colors'
import LocalStorage from './helpers/LocalStorage'
import Logo from './assets/murculLogo.svg'

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoList = styled.div`
  width: 90vw;
  max-width: 360px;
  box-shadow: 0 0 3px ${Colors.box_shadow};
  background: ${Colors.input_background};
`;

const ImageContainer = styled.figure`
  text-align: center;
  max-width: 100px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%;
`;

class  App extends React.Component {
  state = {
    title: 'todo-list',
    showInput: false,
    todos: []
  }

  async componentDidMount() {
    const data = await LocalStorage.loadState('todos')
    !data
    ? this.setState({ todos: [
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
      ]})
    : this.setState({ todos: data })
  }

  openInput = () => this.setState({ showInput: !this.state.showInput })

  createTodo = todo => (
    this.setState(state => {
      return {
        todos: [
          ...state.todos,
          todo
        ]
      }
    }, LocalStorage.saveState('todos', [
          ...this.state.todos,
          todo
        ]))
  )

  removeTodo = item => {
    const todos = this.state.todos.filter(element => item.id !== element.id)

    this.setState({ todos }, LocalStorage.saveState('todos', todos))
  }

  render() {
    const { title, showInput, todos } = this.state

    return (
      <Provider>
        <Container>
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
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
