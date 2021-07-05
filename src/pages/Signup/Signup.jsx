import {Input} from "../components/Input";
import {Container, Form} from "./styled";
import {All} from "../components/All";
import {Button} from "../components/Button";
import useForm from "../../hooks/useForm";
import {UserBusiness} from "../../Business/UserBusiness";
import type {UserSignup} from "../../model/User";

const initialForm : UserSignup= {
  name:'', nickname:'', email: '', password: ''
}

const userBusiness = new UserBusiness()

export const Signup = ()=>{
  const [form : UserSignup, setForm, clearForm] = useForm(initialForm)

  const onSubmit = async(e)=>{
    e.preventDefault()
    try {
      const token : string = await userBusiness.signup(form)
      window.localStorage.setItem('token', token)
      clearForm()
    }catch (err){
      alert(err.response?.data?.message)
    }

  }

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
        </Container>
      </All>
  )
}