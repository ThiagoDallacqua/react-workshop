import React from 'react'
import styled from 'styled-components'
import CustomListItem from '../ListItem'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CustomList = ({ isMobile }) => {
  return (
    <List>
        <CustomListItem isMobile={isMobile} text={'Go to potions class'} />
        <CustomListItem isMobile={isMobile} text={'Buy new robes'} />
        <CustomListItem isMobile={isMobile} text={'Visit Hagrid'} />
    </List>
  )
}

export default CustomList
