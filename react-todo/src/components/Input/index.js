import React from 'react'

import styles from './index.module.css'

class CustomInput extends React.Component {
  state = {
    todoText: '',
    error: false
  }

  onChange = e => this.setState({ todoText: e.target.value })

  onKeyPress = e => {
    if(e.which === 13){
      if (this.state.todoText === '') {
        this.setState({ error: true })
      } else {
        this.props.createTodo({ todo: this.state.todoText })
        this.setState({ todoText: '' })
      }
    }
  }

  render() {
    const { type, placeholder, showInput } = this.props
    const { todoText, error } = this.state

    return (
      <input
        className={`${styles.inputComponent} ${showInput ? `${styles.showInput} ${styles.animationOpen}` : styles.animationClose} ${error ? styles.inputError : ''}`}
        type={type}
        placeholder={error ? 'You must type something!' : placeholder}
        value={todoText}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    )
  }
}

export default CustomInput
