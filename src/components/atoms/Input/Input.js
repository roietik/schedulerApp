import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: #e6e6e6;
  border: none;
  border-radius: 50px;
  outline: none;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: gray;
  }
`;

export default Input;
