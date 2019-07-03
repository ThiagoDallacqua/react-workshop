import React from 'react'

import { Consumer } from '../../Context'

import styles from './index.module.css'

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
    const { text } = this.props
    const { hover, completed, fade } = this.state

    return (
      <li
        className={`${styles.listItem} ${completed ? styles.completed : ''} ${fade ? styles.animateFadeOut : ''}`}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onClick}
      >
        <Consumer>
          {({ updateContextState, todos }) => (
            <span
              style={{
                width: hover ? '40px' : '',
                opacity: hover ? '1' : ''
              }}
              className={`${styles.deleteButton} ${styles.iconWrapper}`}
              onClick={() => {
                this.setState({ fade: true })
                setTimeout(() => {
                  const newTodos = todos.filter(element => element.todo !== text)

                  updateContextState({ todos: newTodos })
                }, 500)
              }}
            >
              <i className="fa fa-trash-o" />
            </span>
          )}
        </Consumer>
        <span
          style={{
            width: hover ? '40px' : '',
            opacity: hover ? '1' : ''
          }}
          className={`${styles.completedButton} ${styles.iconWrapper}`}
          onClick={this.onComplete}
        >
          <i className='fa fa-check' />
        </span>
        {text}
      </li>
    )
  }
}

export default CustomListItem
