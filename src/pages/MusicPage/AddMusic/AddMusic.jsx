import {Button, Container, Form, Input, ModalLoading} from "./styled";
import type {MusicDTO} from "../../../model/Music";
import useForm from "../../../hooks/useForm";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import {useEffect, useState} from "react";
import {Loading} from "../../components/Loading";

const initialForm : MusicDTO = {
  album : '', date: '',file: '',author:'',genre: '', title: ''
}

const musicBusiness = new MusicBusiness()

export const AddMusic = ()=>{
  const [form, setForm, clearForm] = useForm(initialForm)
  const [loading, setLoading] = useState(false)

  const onSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    const music =  new Audio(form.file)
    let valid = false
    music.oncanplay = ()=>{
      valid = true
    }
    setTimeout(async()=>{
      if(!valid){
        setLoading(false)
        alert('Por favor digite um link válido para a música.')
      }
      else{
        try{
          await musicBusiness.addMusic(form)
          alert('Música adicionada')
          clearForm()
          setLoading(false)
        }catch (err){
          setLoading(false)
          alert(err.message)
        }
      }
    },1500)
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Title...'}
          name={'title'}
          onChange={setForm}
          value={form.title}
          required
        />
        <Input
          placeholder={'Author...'}
          name={'author'}
          onChange={setForm}
          value={form.author}
          required
        />
        <Input
          placeholder={'Album'}
          name={'album'}
          onChange={setForm}
          value={form.album}
          required
        />
        <Input
          placeholder={'Link da música...'}
          name={'file'}
          onChange={setForm}
          type={'url'}
          value={form.file}
          required
        />
        <Input
          placeholder={'Gêneros separado por vírgula...'}
          name={'genre'}
          onChange={setForm}
          value={form.genre}
          required
        />
        <Input
          placeholder={'Data...'}
          name={'date'}
          onChange={setForm}
          value={form.date}
          type={'date'}
        />
        <Button>ENVIAR</Button>
      </Form>
      {
        loading?
          <ModalLoading><Loading/></ModalLoading>
          :
          <></>
      }
    </Container>
  )
}