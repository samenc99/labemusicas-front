import {Container, DivTitle, Form, MyTitleIcon} from "./styled";
import {All} from "../components/All";
import {Input} from "../components/Input";
import {Button, ButtonOutlined} from "../components/Button";
import type {UserLogin} from "../../model/User";
import {UserBusiness} from "../../Business/UserBusiness";
import {useCoordinator} from "../../hooks/useCoordinator";
import useForm from "../../hooks/useForm";

const initialForm : UserLogin = {
  emailOrNickname: '', password: ''
}
const userBusiness = new UserBusiness()

export const Login = ()=>{
  const [form : UserLogin, setForm] = useForm(initialForm);
  const {toHome, verifyLogin, toSignup} = useCoordinator()
  verifyLogin()

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      const token = await userBusiness.login(form)
      window.localStorage.setItem('token', token)
      toHome()
    }catch (err){
      alert(err.message)
    }
  }

  return(
    <All>
      <Container>
        <DivTitle>
          <MyTitleIcon/>
          <p>Labemusic<i>®</i></p>
        </DivTitle>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder={'E-mail or nickname'}
            name={'emailOrNickname'}
            value={form.emailOrNickname}
            onChange={setForm}
            required
          />
          <Input
            placeholder={'password'}
            name={'password'}
            value={form.password}
            onChange={setForm}
            type={'password'}
            required
          />
          <Button>ENTRAR</Button>
        </Form>
        <ButtonOutlined onClick={toSignup}>Inscrever-se</ButtonOutlined>
      </Container>
    </All>
  )
}