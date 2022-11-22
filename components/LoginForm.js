import { TextField, Button } from "@mui/material"
import Link from "next/link";
import { useState } from 'react';

export function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailSubmitHandler(event) {
        setEmail(event.target.value)
    }

    function passwordSubmitHandler(event) {
        setPassword(event.target.value)
    }

    function clearForm() {
        setEmail("");
        setPassword("");
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log('отправка данных', email, password);
        clearForm();
    }
    return (<>
        <h2 className="form_heading">Вход для администратора</h2>
        <form className="form" onSubmit={submitHandler}>
            <TextField sx={{ mt: 1, mb: 1 }} type="email" placeholder="Введите почту" value={email} onChange={emailSubmitHandler} required />
            <TextField sx={{ mt: 1, mb: 1 }} type="password" placeholder="Введите пароль" value={password} onChange={passwordSubmitHandler} required />
            <Button variant="outlined" type="submit" sx={{ alignSelf: 'flex-end' }}>
                <Link href={'/admin'}>
                    <a>Войти</a>
                </Link>
            </Button>
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
    `}</style>
    </>)
}