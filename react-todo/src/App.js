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
    title: 'todo-list'
  }

  render() {
    const { title } = this.state

    return (
      <Container>
          <TodoList>
            <Header title={title} />
            <CustomInput type='text' placeholder='Add New Todo' />
            <CustomList />
          </TodoList>
      </Container>
    );
  }
}

export default App;
