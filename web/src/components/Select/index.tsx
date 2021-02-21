import React, { Dispatch, memo, SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  state: string
  setState: Dispatch<React.SetStateAction<string>>
  name: string
  label: string
  placeholder: string
  options: string[]
}

const Select: React.FC<SelectProps> = memo(({
  state: string,
  setState,
  label,
  placeholder, 
  options, 
  name, 
  ...rest
}) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <select onChange={e => {setState(e.target.value)}} id={name} {...rest}>
      <option hidden value="" >{placeholder}</option>
      {
        options.map((option) => (
          <option 
            key={option}
            value={option}
          >
            {option}
          </option>
        ))
      }
    </select>
  </Container>
))

export default Select;