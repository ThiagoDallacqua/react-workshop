import React from 'react';
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import ProviderComponent, { Consumer } from './Context'

import styles from './index.module.css'

class  App extends React.Component {
  state = {
    title: 'todo-list',
    showInput: false,
  }

  openInput = () => this.setState({ showInput: !this.state.showInput })

  render() {
    const { title, showInput } = this.state

    return (
      <ProviderComponent>
        <div className={styles.container}>
          <Consumer>
            {({ isMobile, todos }) => (
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
                />
                <CustomList
                  todos={todos}
                  isMobile={isMobile}
                />
              </div>
            )}
          </Consumer>
        </div>
      </ProviderComponent>
    );
  }
}

export default App;
