import React from 'react'
import styled, { keyframes } from 'styled-components'
import Colors from '../../colors'

const openInput = keyframes`
  from{
    opacity: 0;
  }
  to{
    opdacity: 1;
  }
`;

const closeInput = keyframes`
  from{
    opacity: 1;
  }
  to{
    opdacity: 0;
  }
`;

const Input = styled.input`
  font-size: 18px;
  background-color: ${Colors.input_background};
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  color: ${Colors.input_color};
  border: 3px solid ${Colors.input_border};
  display: ${({ showInput }) => showInput ? 'block' : 'none'};
  opacity: ${({ showInput }) => showInput ? '1' : '0'};
  animation: ${({ showInput }) => showInput ? openInput : closeInput} .5s ease-in-out;
  &:focus{
    background: white;
    border: 3px solid ${({ error }) => error ? Colors.input_error : Colors.input_color};
    outline: none;
  }
  &::placeholder{
    color: ${({ error }) => error ? Colors.input_error : ''};
  }
`;

class CustomInput extends React.Component {
  state = {
    todoTitle: '',
    error: false
  }

  onChange = e => this.setState({ todoTitle: e.target.value, error: false })

  onKeyPress = e => {
    if(e.key.toLowerCase() === 'enter'){
      if (this.state.todoTitle === '') {
        this.setState({ error: true })
      } else {
        this.props.createTodo({ title: this.state.todoTitle, id: Math.floor(Math.random() * 100) })
        this.setState({ todoTitle: '' })
      }
    }
  }

  render() {
    const { type, placeholder, showInput } = this.props
    const { todoTitle, error } = this.state

    return (
      <Input
        type={type}
        placeholder={error ? 'You must type something!' : placeholder}
        showInput={showInput}
        value={todoTitle}
        error={error}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    )
  }
}

export default CustomInput
