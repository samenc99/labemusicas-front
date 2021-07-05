import {Container, Form} from "./styled";
import {All} from "../components/All";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import type {UserLogin} from "../../model/User";
import {useState} from "react";
import {UserBusiness} from "../../Business/UserBusiness";
import {useCoordinator} from "../../hooks/useCoordinator";

const initialForm : UserLogin = {
  emailOrNickname: '', password: ''
}
const userBusiness = new UserBusiness()

export const Login = ()=>{
  const [form : UserLogin, setForm] = useState(initialForm);
  const {toFeed} = useCoordinator()

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      const token : string = await userBusiness.login(form)
      window.localStorage.setItem('token', token)
      toFeed()
    }catch (err){
      console.log(err)
    }
  }

  return(
    <All>
      <Container>
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
          <Button>Entrar</Button>
        </Form>
      </Container>
    </All>
  )
}