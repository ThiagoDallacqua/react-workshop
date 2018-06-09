import React from 'react'
import styled from 'styled-components'
import CustomListItem from '../ListItem'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CustomList = ({ todos, removeTodo }) => {
  return (
    <List>
      {
        todos.map((element) => (
          <CustomListItem
            key={element.id}
            element={element}
            removeTodo={removeTodo}
          />
        ))
      }
    </List>
  )
}

export default CustomList
