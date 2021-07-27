import {Input} from "../components/Input";
import {Container, Form} from "./styled";
import {All} from "../components/All";
import {Button, ButtonOutlined} from "../components/Button";
import useForm from "../../hooks/useForm";
import {UserBusiness} from "../../Business/UserBusiness";
import type {UserSignup} from "../../model/User";
import {useCoordinator} from "../../hooks/useCoordinator";
import {useEffect} from "react";

const initialForm : UserSignup= {
  name:'', nickname:'', email: '', password: ''
}
const userBusiness = new UserBusiness()

export const Signup = ()=>{
  const [form : UserSignup, setForm] = useForm(initialForm)
  const {toHome, toLogin, verifyLogin} = useCoordinator()
  verifyLogin()

  const onSubmit = async(e)=>{
    e.preventDefault()
    try {
      const token = await userBusiness.signup(form)
      window.localStorage.setItem('token', token)
      toHome()
    }catch (err){
      alert(err.message)
    }
  }

  useEffect(() => {
    return () => {
    };
  }, []);


  return(
      <All>
        <Container>
          <Form onSubmit={onSubmit}>
            <Input
              placeholder={'Name'}
              name={'name'}
              value={form.name}
              onChange={setForm}
              required
            />
            <Input
              placeholder={'Nickname'}
              name={'nickname'}
              value={form.nickname}
              onChange={setForm}
              required
            />
            <Input
              placeholder={'Email'}
              name={'email'}
              value={form.email}
              onChange={setForm}
              type={'email'}
              required
            />
            <Input
              placeholder={'Password'}
              name={'password'}
              value={form.password}
              onChange={setForm}
              type={'password'}
              required
            />
            <Button>Criar conta</Button>
          </Form>
          <ButtonOutlined onClick={toLogin}>Voltar</ButtonOutlined>
        </Container>
      </All>
  )
}