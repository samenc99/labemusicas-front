import {Button, Container, Form, Input} from "./styled";
import type {MusicDTO} from "../../../model/Music";
import useForm from "../../../hooks/useForm";
import {MusicBusiness} from "../../../Business/MusicBusiness";

const initialForm : MusicDTO = {
  album : '', date: '',file: '',author:'',genre: '', title: ''
}

const musicBusiness = new MusicBusiness()

export const AddMusic = ()=>{
  const [form, setForm, clearForm] = useForm(initialForm)

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      await musicBusiness.addMusic(form)
      alert('Música adicionada')
      clearForm()
    }catch (err){
      alert(err.response.message)
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Title...'}
          name={'title'}
          onChange={setForm}
          required
        />
        <Input
          placeholder={'Author...'}
          name={'author'}
          onChange={setForm}
          required
        />
        <Input
          placeholder={'Album'}
          name={'album'}
          onChange={setForm}
          required
        />
        <Input
          placeholder={'Link da música...'}
          name={'file'}
          onChange={setForm}
          required
        />
        <Input
          placeholder={'Gêneros separado por vírgula...'}
          name={'genre'}
          onChange={setForm}
          required
        />
        <Input
          placeholder={'Data...'}
          name={'date'}
          onChange={setForm}
          type={'date'}
        />
        <Button>ENVIAR</Button>
      </Form>
    </Container>
  )
}