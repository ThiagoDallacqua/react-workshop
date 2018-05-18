import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotateRight = keyframes`
  0%{

      transform: rotate(0deg);
  }100%{

      transform: rotate(90deg) scale(1.5);
  }
`;

const rotateLeft = keyframes`
  0%{

      transform: rotate(90deg) scale(1.5);
  }100%{

      transform: rotate(0deg) scale(1);
  }
`;

const rotateFast = keyframes`
  0%{

      transform: rotate(0deg) scale(1.5);
  }100%{

      transform: rotate(540deg) scale(1.5);
  }
`;

const Title = styled.h1`
  background: #2980b9;
  color: white;
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
  animation: ${({enter, leave, clicked}) => enter ? rotateRight : leave ? rotateLeft : clicked ? rotateFast : ''} .5s ease;
  padding: 5px;
  &:hover{
    transform: scale(1.5);
  }
`;

class Header extends React.Component {
  state = {
    enter: false,
    leave: false,
    clicked: false
  }

  onMouseEnter = () => this.setState({ enter: true, leave: false })

  onMouseLeave = () => this.setState({ enter: false, leave: true })

  onClick = () => this.setState({ enter: false, leave: false, clicked: true })

  render() {
    const { enter, leave, clicked } = this.state
    const { title } = this.props

    return (
      <Title>
        {title}
        <AddButton
          className="fa fa-plus"
          ariaHidden="true"
          enter={ enter }
          leave={ leave }
          clicked={ clicked }
          onClick={this.onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </Title>
    )
  }
}

export default Header
