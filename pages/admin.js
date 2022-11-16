import { API } from '../utils/constants'

export default function AdminPage({posts}) {

    const defaultPosts = [{id:1, text:'Первый вопрос'}, {id:2, text:'Второй вопрос'}] // не отработала логика получения вопросов, поставила заглушку
    return <>
        <p> Вопросы пользователей: </p>
        <ul>
            {defaultPosts.map((element) => // было posts.map
                <li key={element.id}>{element.text}</li>
            )}

        </ul>
    </>
}

export async function getStaticProps() {

    const response = await fetch(`${API}/question`)
    const posts = await response.json()

    return { props: { posts } }
}

