import { Box, Button, TextField } from '@mui/material'
import { MainLayout } from '../components/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <main>
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
          </main>
          </MainLayout>
  )
}
