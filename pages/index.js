import { MainLayout } from '../components/MainLayout'
import { QuestionForm } from '../components/QuestionForm'
import { ChatForm } from '../components/ChatForm'

export default function HomePage() {

  return (
    <>
      <MainLayout>
        <main>
          <ChatForm />
          <QuestionForm />
        </main >
      </MainLayout>
    </>
  )

}
