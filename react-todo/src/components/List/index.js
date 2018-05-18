import React from 'react'
import styled from 'styled-components'
import CustomListItem from '../ListItem'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CustomList = () => {
  return (
    <List>
        <CustomListItem text={'Go to potions class'} />
        <CustomListItem text={'Buy new robes'} />
        <CustomListItem text={'Visit Hagrid'} />
    </List>
  )
}

export default CustomList
