import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Context } from '../../Context'
import Colors from '../../colors'

const rotateRight = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(90deg) scale(1.5);
  }
`;

const rotateLeft = keyframes`
  0%{
    transform: rotate(90deg) scale(1.5);
  }
  100%{
    transform: rotate(0deg) scale(1);
  }
`;

const pickAnimation = (enter, addedTodo) => {
  if (enter) {
    return rotateRight
  } else if (!enter) {
    return rotateLeft
  }
}

const Title = styled.h1`
  background: ${Colors.title_background};
  color: ${Colors.white};
  margin: 0;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.i`
  cursor: pointer;
  animation: ${({ enter }) => pickAnimation(enter)} .5s ease;
  padding: 5px;
  &:hover{
    transform: ${({ enter }) => enter ? 'scale(1.5)' : ''};
  }
`;

class Header extends React.Component {
  state = {
    enter: false
  }

  onMouseEnter = () => this.setState({ enter: true })

  onMouseLeave = () => this.setState({ enter: false })

  render() {
    const { enter } = this.state
    const { title, openInput } = this.props
    
    return (
      <Title>
        {title}
        <Context.Consumer>
          {
            ({ addedTodo, isMobile }) => (
              <AddButton
                className="fa fa-plus"
                ariaHidden="true"
                enter={ enter }
                isMobile={isMobile}
                onClick={() => {
                  (isMobile && (this.setState({ enter: !enter })))
                  openInput()
                }}
                onMouseEnter={() => (
                  !isMobile && (this.onMouseEnter())
                )}
                onMouseLeave={() => (
                  !isMobile && (this.onMouseLeave())
                )}
              />
            )
          }
        </Context.Consumer>
      </Title>
    )
  }
}

export default Header
