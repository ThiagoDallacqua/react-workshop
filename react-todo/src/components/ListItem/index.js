import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Context } from '../../Context'
import Colors from '../../colors'

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const fadeTimer = 500

const ListItem = styled.li`
  background: ${Colors.white};
  height: 40px;
  line-height: 40px;
  padding: 5px;
  color: ${({ completed }) => completed ? Colors.todo_complete : Colors.todo_regular};
  text-decoration: ${({ completed }) => completed ? 'line-through': 'none'};
  animation: ${({ fade }) => fade ? fadeOut : ''} ${fadeTimer}ms ease;
  &:nth-child(2n){
    background: ${Colors.pair_role};
  }
`;

const IconWrapper = styled.span`
  height: 40px;
  text-align: center;
  color: ${Colors.white};
  cursor: pointer;
  width: ${({ hover }) => hover ? '40px' : 0};
  display: inline-block;
  opacity: ${({ hover }) => hover ? 1 : 0};
  transition: 0.2s linear;
`;

const Completed = IconWrapper.extend`
  background: ${Colors.completed_box};
  margin-right: 20px;
`;

const Delete = IconWrapper.extend`
  background: ${Colors.delete_box};
  margin-right: 2px;
`;

const Icon = styled.i``;

class CustomListItem extends React.Component {
  state = {
    hover: false,
    completed: false,
    fade: false
  }

  onEnter = () => this.setState({ hover: true })

  onLeave = () => this.setState({ hover: false })

  onClick = () => this.setState({ hover: !this.state.hover })

  onComplete = () => this.setState({ completed: !this.state.completed })

  componentWillUnmount() {
    this.setState({ fade: false })
  }

  render() {
    const { element, removeTodo } = this.props
    const { hover, completed, fade } = this.state

    return (
      <Context.Consumer>
        {
          ({ isMobile }) => (
            <ListItem
              onMouseEnter={() => (
                !isMobile && (this.onEnter())
              )}
              onMouseLeave={() => (
                !isMobile && (this.onLeave())
              )}
              onClick={() => (
                isMobile && (this.onClick())
              )}
              completed={completed}
              fade={fade}
            >
              <Delete
                hover={hover}
                onClick={() => {
                  this.setState({ fade: true })
                  setTimeout(() => {
                    removeTodo(element)
                  }, fadeTimer)
                }}
              >
                <Icon className="fa fa-trash-o" aria-hidden="true" />
              </Delete>
              <Completed hover={hover} onClick={this.onComplete}>
                <Icon className='fa fa-check' aria-hidden='true' />
              </Completed>
              {element.title}
            </ListItem>
          )
        }
      </Context.Consumer>
    )
  }
}

export default CustomListItem
