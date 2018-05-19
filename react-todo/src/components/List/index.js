import React from 'react'
import styled from 'styled-components'
import CustomListItem from '../ListItem'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CustomList = ({ isMobile, todos, removeTodo }) => {
  return (
    <List>
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
    </List>
  )
}

export default CustomList
