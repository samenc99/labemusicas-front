import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  padding-left: 20px;
  margin-bottom: 20px;
  border-radius: 9px;
  transition: all 1s;

  :active, :focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  :hover {
    border: 1px solid rgba(113, 110, 110, 0.5);
  }
`