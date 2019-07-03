import React from 'react';
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import ProviderComponent from './Context'

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
          <div className={styles.todoList} >
            <Header
              title={title}
              openInput={this.openInput}
            />
            <CustomInput
              type='text'
              placeholder='Add New Todo'
              showInput={showInput}
            />
            <CustomList/>
          </div>
        </div>
      </ProviderComponent>
    );
  }
}

export default App;
