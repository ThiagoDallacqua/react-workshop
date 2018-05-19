import React from 'react'
import styled, { keyframes } from 'styled-components'

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
  background-color: #f7f7f7;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  color: #2980b9;
  border: 3px solid rgba(0, 0, 0, 0);
  display: ${({ showInput }) => showInput ? 'block' : 'none'};
  opacity: ${({ showInput }) => showInput ? '1' : '0'};
  animation: ${({showInput}) => showInput ? openInput : closeInput} .5s ease-in-out;
  &:focus{
    background: white;
    border: 3px solid ${({ error }) => error ? '#e74c3c' : '#2980b9'};
    outline: none;
  }
  &::placeholder{
    color: ${({ error }) => error ? '#e74c3c' : ''};
  }
`;

class CustomInput extends React.Component {
  state = {
    todoText: '',
    error: false
  }

  onChange = e => this.setState({ todoText: e.target.value })

  onKeyPress = e => {
    if(e.which === 13){
      this.state.todoText === ''
      ? this.setState({ error: true })
      : console.log('add todo')
    }
  }

  render() {
    const { type, placeholder, showInput } = this.props
    const { todoText, error } = this.state

    return (
      <Input
        type={type}
        placeholder={error ? 'You must type something!' : placeholder}
        showInput={showInput}
        value={todoText}
        error={error}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    )
  }
}

export default CustomInput
