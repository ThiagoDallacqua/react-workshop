import React from 'react'
import CustomListItem from '../ListItem'

import styles from './index.module.css'

const CustomList = ({ isMobile, todos, removeTodo }) => {
  return (
    <ul className={styles.list}>
      {
        todos.map((element, i) => (
          <CustomListItem
            key={i}
            isMobile={isMobile}
            text={element.todo}
            removeTodo={removeTodo}
          />
        ))
      }
    </ul>
  )
}

export default CustomList
