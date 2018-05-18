import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 18px;
  background-color: #f7f7f7;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  color: #2980b9;
  border: 3px solid rgba(0, 0, 0, 0);
  &:focus{
    background: white;
    border: 3px solid #2980b9;
    outline: none;
  }
`;

const CustomInput = ({type, placeholder}) => {
  return (
    <Input type={type} placeholder={placeholder} />
  )
}

export default CustomInput
