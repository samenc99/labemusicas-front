import styled from "styled-components";
import {All} from "../components/All";

export const MyAll = styled(All)`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 100px;
`

export const Nav = styled.nav`
  background-color: #000000;
  padding: 10px;
  position: relative;
`

export const Content = styled.section`
  background-color: #121212;
  overflow-y: auto;
`

export const PlayContent = styled.section`
  grid-column: 1/3;
  background-color: #181818;
  border-top: 1px solid #282828;
`