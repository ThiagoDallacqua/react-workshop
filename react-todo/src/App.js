import React from 'react';
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import ProviderComponent, { Consumer } from './Context'

import styles from './index.module.css'

const App = () => (
  <ProviderComponent>
    <div className={styles.container}>
      <div className={styles.todoList} >
        <Consumer>
          {({ showInput, updateContextState }) => (
            <Header onClick={() => updateContextState({ showInput: !showInput })}/>
          )}
        </Consumer>
        <CustomInput
          type='text'
          placeholder='Add New Todo'
        />
        <CustomList />
      </div>
    </div>
  </ProviderComponent>
)

export default App;
