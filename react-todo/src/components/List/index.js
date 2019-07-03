import React from 'react'
import CustomListItem from '../ListItem'

import styles from './index.module.css'
import { Consumer } from '../../Context';

const CustomList = () => {
  return (
    <ul className={styles.list}>
      <Consumer>
        {({ todos }) => (
          todos.map((element, i) => (
            <CustomListItem
              key={i}
              text={element.todo}
            />
          ))
        )}
      </Consumer>
    </ul>
  )
}

export default CustomList
