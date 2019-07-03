import React from 'react'
import CustomListItem from '../ListItem'

import styles from './index.module.css'

const CustomList = ({ todos }) => {
  return (
    <ul className={styles.list}>
      {
        todos.map((element, i) => (
          <CustomListItem
            key={i}
            text={element.todo}
          />
        ))
      }
    </ul>
  )
}

export default CustomList
