import { Box, Button, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { API } from '../utils/constants'
import styles from '../styles/MainLayout.module.css'

export function QuestionForm () {
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
    
      const onSubmit = async (data) => {
    
        console.log(JSON.stringify(data));
    
        try {
          const response = await fetch(`${API}/question`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
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
          <form id='messageForm' onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <Box><TextField id="outlined-basic" label="Name" variant="outlined"
              {...register("name", { required: 'Напишите как к Вам обращаться' })}

            />
              <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
                {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
              </div></Box>

            <Box><TextField id="outlined-basic" label="Email" variant="outlined" {...register("email", {
              required: 'Напишите Ваш email.',
              pattern: {
                value: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/,
                message: 'Некорректно набран email'
              }
            })}
            /> <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
              </div></Box>
            <Box><TextField id="outlined-basic" label="Phone" variant="outlined"  {...register("phone", {
              required: 'Напишите Ваш номер телефона.',
              minLength: {
                value: 11,
                message: 'Минимум 11 символов.'
              }
            })}
            /> <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
                {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
              </div></Box>

            <Box><TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}

              {...register("text", { required: 'Напишите Ваш вопрос.' })}

            /> <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
                {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
              </div></Box>

            <Button variant="outlined" type="submit" disabled={!isValid}>Send</Button>
          </form>
        </>
    )
}