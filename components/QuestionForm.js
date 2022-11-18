import { Box, Button, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { API } from '../utils/constants'
import styles from '../styles/MainLayout.module.css'

export function QuestionForm() {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })
  // reset - очистка формы
  // isValid - неактивная кнопка при незаполненной форме

  const regexEmail = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/
  const regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

  // Проверка полей email и phone
  function contactValue(value) {

    if (regexPhone.test(value) || regexEmail.test(value))
      return true
    else return false
  }


  // В зависимости от введенного контакта, отправляется поле email || phone
  function dataGeneration(data) {
    const newData = {}

    if (regexEmail.test(data.contact)) {

      newData.text = data.text
      newData.email = data.contact
      newData.name = data.name

      return newData

    } else {
      newData.text = data.text
      newData.phone = data.contact
      newData.name = data.name

      return newData
    }
  }


  const onSubmit = async (data) => {
    const newData = dataGeneration(data)

    try {
      const response = await fetch(`${API}/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newData)
      })
      let result = await response.json();
      console.log(result);

    } catch {
      console.log('error POST request')
    }
    reset()

  };


  return (
    <>
      <Box
        sx={{
          margin: '10% 0',
          height: '100%',
          backgroundColor: '#dde3f0',
        }}>
        <form id='messageForm' onSubmit={handleSubmit(onSubmit)} className={styles.form}>

          <Box><TextField id="outlined-basic" label="Имя" variant="outlined" sx={{ width: '100%', boxSizing: 'content-box' }}
            {...register("name", { required: 'Напишите как к Вам обращаться' })}

          />
            <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div></Box>

          <Box>
            <TextField id='outlined-basic' label="Номер телефона или email" sx={{ width: '100%', boxSizing: 'content-box' }} variant="outlined" {...register('contact', {
              required: 'Напишите Ваш номер телефона или email.',
              validate: value => contactValue(value)
            })}
            /> <div style={{ height: '100%', minHeight: '20px', color: 'red', fontSize: '12px' }}>
              {errors?.contact && <p>{errors?.contact?.message || 'Некорректно набрана контактная информация. Обратите внимание на формат email: example@example.ex, номер телефона - 11 цифр.'}</p>}
            </div>

          </Box>
          <Box><TextField
            id="outlined-multiline-static"
            label="Сообщение"
            multiline
            rows={4}
            sx={{ width: '100%', boxSizing: 'content-box' }}
            {...register("text", { required: 'Напишите Ваш вопрос.' })}

          /> <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
              {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
            </div></Box>

          <Button sx={{ boxSizing: 'content-box', width: 'fit-content', alignSelf: 'flex-end' }} variant="outlined" type="submit" disabled={!isValid}>Отправить</Button>
        </form>
      </Box>
    </>
  )
}
