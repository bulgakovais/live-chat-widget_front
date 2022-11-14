import { API } from '../utils/constants'

export default function AdminPage({ posts }) {

    return <>
        <p> Вопросы пользователей: </p>
        <ul>
            {posts.map((element) =>
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

