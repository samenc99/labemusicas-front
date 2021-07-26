import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const Circular = styled(CircularProgress)`
  width: 50px;
  height: 50px;
  color: #1ed760;
`

export const Loading = ()=>{
  return <Circular/>
}