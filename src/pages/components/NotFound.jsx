import NotInterestedIcon from '@material-ui/icons/NotInterested';
import styled from 'styled-components'

export const P = styled.p`
  width: 100%;
  padding: 20px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export const Icon = styled(NotInterestedIcon)`
  width: 50px;
  height: 50px;
  color: white;
`

export const NotFound = ({message})=>{
  return <P>
    <Icon/>
    {message}
  </P>
}