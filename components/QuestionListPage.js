
import { useEffect, useState } from "react"
import { API } from "../utils/constants"
import styles from '../styles/adminCategory.module.css'

export default function QuestionListPage() {

    const [posts, setPosts] = useState([])

    const getAuthorization = async () => {
        try {
            const response = await fetch(`${API}/user/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:
                    JSON.stringify({
                        "password": "123456",
                        "email": "admin@mail.ru"
                    })
            })
            const data = await response.json()

            return data.token

        } catch {
            console.log(new Error(`Request failed(Auth): ${response.status}`))
        }
    }

    async function getUsersQuestions() {
        try {
            const token = await getAuthorization()

            const response = await fetch(`${API}/question`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            console.log('posts: ', data);
            setPosts(data)

        } catch {
            console.log(new Error(`Request failed: ${response.status}`))
        }
    }

    useEffect(() => {
        getUsersQuestions()
    }, [])

    return (
        <>
            <ul className={styles.questinoList}>
                {posts.map((element) =>
                    <li className={styles.questinoListItem} key={element.id}>{element.text}</li>
                )}

            </ul>
        </>
    )
}