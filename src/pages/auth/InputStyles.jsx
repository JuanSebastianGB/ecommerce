import styled from 'styled-components';

export const InputStyled = styled.input`
  padding: 1rem;
  display: block;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: thin solid black;
  width: 100%;
  outline: none;
  &::placeholder {
    color: gray;
  }
`;
