import React from 'react';
import Header from './components/Header'
import CustomInput from './components/Input'
import CustomList from './components/List'
import ProviderComponent from './Context'

import styles from './index.module.css'

const App = () => (
  <ProviderComponent>
    <div className={styles.container}>
      <div className={styles.todoList} >
        <Header />
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
