import { MainLayout } from '../components/MainLayout'
//import { QuestionForm } from '../components/QuestionForm'
import { ChatForm } from '../components/ChatForm'

export default function HomePage() {

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

  function dataGeneration(data) {

    const newData = {}
    const regex = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/

    if (regex.test(data.contact)) {

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

  function contactValue(value) {
    const contactValue1 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    // Проверка email
    const contactValue2 = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/
    // Проверка телефона

    if (contactValue1.test(value) || contactValue2.test(value))
      return true
    else return false
  }


  return (
    <>
    <MainLayout>
      <main>

        <Box
          sx={{
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
              /> <div style={{ height: '100%', color: 'red', fontSize: '12px' }}>
                {errors?.contact && <p>{errors?.contact?.message || 'Некорректно набрана контактная информация. Обратите внимание на формат email: example@example.ex, номер телефона - 11 цифр.'}</p>}
              </div>

            </Box>
            <Box><TextField
              id="outlined-multiline-static"
              label="Сообщение"
              multiline
              rows={4}
              sx={{}}
              {...register("text", { required: 'Напишите Ваш вопрос.' })}

            /> <div style={{ height: 20, color: 'red', fontSize: '12px' }}>
                {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
              </div></Box>

            <Button variant="outlined" type="submit" disabled={!isValid}>Отправить</Button>
          </form>
        </Box>

        <ChatForm/>

      </main >
    </MainLayout>
     </>
  )
 
}
