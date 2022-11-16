import { TextField, Button} from "@mui/material"
export function ChatForm () {
    return ( <>
        <h2 className="form_heading">Задайте ваш вопрос специалисту</h2>
            <form className="form">
                <div className="message_list">
                    Здесь скоро будут сообщения и логика бота...
                </div>
                <TextField sx={{mt:1, mb:1}} placeholder="Задайте вопрос..."required/>
                <Button variant="outlined" type="submit" sx={{alignSelf:'flex-end'}}>Отправить</Button>
            </form>
            <style jsx>{`
      .form_heading {
        text-align: center;
        margin-top: 1.5rem;
      }
      .form {
        padding: 1.5rem;
        display: flex;
        flex-direction:column;
      }
      .message_list {
        padding: 2rem;
        height: 24rem;
        border: 1px solid rgba(129,130,125,0.41);
        border-radius: 7px;
      }
    `}</style>
    </>)
}