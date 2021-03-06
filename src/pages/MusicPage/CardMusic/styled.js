import styled from "styled-components";

export const Content = styled.li`
  list-style: none;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  >p{
    color: #B3B3B3;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  >p:nth-child(1){
    color: white;
  }
  padding-left: 50px;
  cursor: pointer;
  :hover{
    background-color: #181818;
  }
  :active{
    opacity: 80%;
  }
`