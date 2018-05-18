import React from 'react';
import './temp.css'
import styled from 'styled-components'
import Header from './components/Header'

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

            <input type="text" placeholder="Add New Todo" />

            <ul>
                <li>
                  <span className="delete">
                    <i className="fa fa-trash-o" ariaHidden="true" />
                  </span>
                  <span className="completedMobile">
                    <i className='fa fa-check' aria-hidden='true' />
                  </span>
                  Go to potions class
                </li>
                <li>
                  <span className="delete">
                    <i className="fa fa-trash-o" ariaHidden="true" />
                  </span>
                  <span className="completedMobile">
                    <i className='fa fa-check' aria-hidden='true' />
                  </span>
                  Buy new robes
                </li>
                <li>
                  <span className="delete">
                    <i className="fa fa-trash-o" ariaHidden="true" />
                  </span>
                  <span className="completedMobile">
                    <i className='fa fa-check' aria-hidden='true'/>
                  </span>
                  Visit Hagrid
                </li>
            </ul>
          </TodoList>
      </Container>
    );
  }
}

export default App;
