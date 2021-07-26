import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


export const Content = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const DivInput = styled.section`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#1E153D, #1B1728);
`

export const MyInput = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 25px;
  padding-left: 45px;
  outline: 0;
  background-color: #f3f0f0;
`

export const MySearchIcon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  color: #7b8f88;
  position: absolute;
  top: 25px;
  left:16%;
  cursor: pointer;

  :hover {
    color: #4c4b4b;
  }
  :active {
    color: #7b8f88;
  }
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
`

export const FormRadio = styled.form`
  width: 100%;
  background-image: linear-gradient(0deg, #1B1729,#1B1728);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GreenRadio = withStyles({
  root: {
    color: "#1ed760",
    '&$checked': {
      color: "#1ed760",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const DivRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  color: white;
  font-size: 16px;
`