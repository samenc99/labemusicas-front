import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >p{
    flex: 1;
    color: #B3B3B3;
    font-size: 15px;
  }
  padding-left: 50px;
  margin-bottom: 10px;
  background-image: linear-gradient(#1B1729, #131217);
  position: sticky;
  top: 0;
  box-shadow: 0 0 100px #1B1729;
`