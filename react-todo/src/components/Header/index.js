import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const rotateFast = keyframes`
  0%{
    transform: rotate(0deg) scale(1.5);
  }
  100%{
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
  animation: ${({enter, leave, addedTodo}) => enter ? rotateRight : leave ? rotateLeft : addedTodo ? rotateFast : ''} .5s ease;
  padding: 5px;
  &:hover{
    transform: ${({ isMobile, enter }) => isMobile ? enter ? 'scale(1.5)' : '' : 'scale(1.5)'};
  }
`;

class Header extends React.Component {
  state = {
    enter: false,
    leave: false
  }

  onMouseEnter = () => (!this.props.isMobile && (
    this.setState({ enter: true, leave: false })
  ))

  onMouseLeave = () => (!this.props.isMobile && (
    this.setState({ enter: false, leave: true })
  ))

  render() {
    const { enter, leave } = this.state
    const { title, openInput, isMobile } = this.props
// add logic for addedTodo!
    return (
      <Title>
        {title}
        <AddButton
          className="fa fa-plus"
          ariaHidden="true"
          enter={ enter }
          leave={ leave }
          onClick={() => {
            !enter
            ? this.setState({ enter: true, leave: false })
            : this.setState({ enter: false, leave: true })

            openInput()
          }}
          addedTodo={false}
          isMobile={isMobile}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </Title>
    )
  }
}

export default Header
