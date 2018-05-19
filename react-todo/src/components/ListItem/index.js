import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const ListItem = styled.li`
  background: #fff;
  height: 40px;
  line-height: 40px;
  padding: 5px;
  color: ${({ completed }) => completed ? 'gray' : '#666'};
  text-decoration: ${({ completed }) => completed ? 'line-through': 'none'};
  animation: ${({ fade }) => fade ? fadeOut : ''} .5s ease;
  &:nth-child(2n){
    background: #f7f7f7;
  }
`;

const IconWrapper = styled.span`
  height: 40px;
  text-align: center;
  color: white;
  cursor: pointer;
  width: ${({hover}) => hover ? '40px' : 0};
  display: inline-block;
  opacity: ${({hover}) => hover ? 1 : 0};
  transition: 0.2s linear;
`;

const Completed = IconWrapper.extend`
  background: #94e753;
  margin-right: 20px;
`;

const Delete = IconWrapper.extend`
  background: #e74c3c;
  margin-right: 2px;
`;

const Icon = styled.i``;

class CustomListItem extends React.Component {
  state = {
    hover: false,
    completed: false,
    fade: false
  }

  onEnter = () => (!this.props.isMobile && (
    this.setState({ hover: true })
  ))

  onLeave = () => (!this.props.isMobile && (
    this.setState({ hover: false })
  ))

  onClick = () => (this.props.isMobile && (
    this.setState({ hover: !this.state.hover })
  ))

  onComplete = () => this.setState({ completed: !this.state.completed })

  componentWillUnmount() {
    this.setState({ fade: false })
  }

  render() {
    const { text, removeTodo } = this.props
    const { hover, completed, fade } = this.state

    return (
      <ListItem
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onClick}
        completed={completed}
        fade={fade}
      >
        <Delete
          hover={hover}
          onClick={() => {
            this.setState({ fade: true })
            setTimeout(() => {
              removeTodo({ todo: text })
            }, 500)
          }}
        >
          <Icon className="fa fa-trash-o" ariaHidden="true" />
        </Delete>
        <Completed hover={hover} onClick={this.onComplete}>
          <Icon className='fa fa-check' aria-hidden='true' />
        </Completed>
        {text}
      </ListItem>
    )
  }
}

export default CustomListItem
