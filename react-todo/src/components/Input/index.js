import React from 'react'

import { Consumer } from '../../Context.js'

import styles from './index.module.css'

class CustomInput extends React.Component {
  state = {
    todoText: '',
    error: false
  }

  onChange = e => this.setState({ todoText: e.target.value })

  render() {
    const { type, placeholder } = this.props
    const { todoText, error } = this.state

    return (
      <Consumer>
        {({ todos, updateContextState, showInput }) => (
          <input
            className={`${styles.inputComponent} ${showInput ? `${styles.showInput} ${styles.animationOpen}` : styles.animationClose} ${error ? styles.inputError : ''}`}
            type={type}
            placeholder={error ? 'You must type something!' : placeholder}
            value={todoText}
            onChange={this.onChange}
            onKeyPress={e => {
              if (e.which === 13) {
                if (this.state.todoText === '') {
                  this.setState({ error: true })
                } else {
                  updateContextState({
                    todos: [
                      ...todos,
                      {
                        todo: this.state.todoText
                      }
                    ]
                  })
                  this.setState({ todoText: '' })
                }
              }
            }}
          />
        )}
      </Consumer>
    )
  }
}

export default CustomInput
