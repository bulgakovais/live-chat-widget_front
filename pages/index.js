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

    </div >

  )
}
