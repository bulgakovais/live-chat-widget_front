import { Box, Button, TextField } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Live-chat</title>
        <meta name="description" content="Виджет для техподдержки с базой знаний(F.A.Q.) и чатом" />
        <meta charset="utf-8" />
      </Head>
      <main>
        <Box
          sx={{
            width: 500,
            height: 700,
            position: 'relative',
            backgroundColor: '#dde3f0',
          }}>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: '2em', width: '80%', position: 'absolute', bottom: '5rem' },
            }}
            noValidate
            autoComplete="off"
          >

            <TextField
              id="standard-textarea"
              label="Напишите сообщение"
              placeholder=""
              multiline
              variant="standard"
            />

            <Button variant="outlined"
              sx={{
                position: 'absolute',
                bottom: '1em',
                margin: '2em',
                '&:hover': {
                  backgroundColor: '#ebf0ff',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >Отправить</Button>
          </Box>
        </Box>
      </main >
    </div >

  )
}
