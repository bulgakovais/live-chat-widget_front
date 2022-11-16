import Link from 'next/link'
import Head from 'next/head'
import { Box } from '@mui/material'
import styles from '../styles/MainLayout.module.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export function MainLayout ({ children }) {
    return (<> 
      <Head>
        <title>Live-chat</title>
        <meta name="description" content="Виджет для техподдержки с базой знаний(F.A.Q.) и чатом" />
        <meta charSet="utf-8" />
      </Head> 
      <div className={styles.container}>

    <Box
          sx={{
            width: 500,
            height: 700,
            position: 'relative',
            backgroundColor: '#dde3f0',
          }}>
        <nav>
            <Link href="/"><a><span className='icon'><SupportAgentIcon  sx={{fontSize:'35px'}}/></span></a></Link>
            <Link href="/faq"><a><span className='icon'><HelpOutlineIcon sx={{fontSize:'35px'}}/></span></a></Link>
            <Link href="/user/login"><a><span className='icon'><AdminPanelSettingsIcon sx={{fontSize:'35px'}}/></span></a></Link>
         </nav>
         {children}
         </Box>
    </div >
    <style jsx>{`
        nav {
            display: flex;
            justify-content: center;
            padding-top: 2rem;
        }
        nav a {
            margin-right: 2rem
        }
        .icon {
            color:black;
        }
        .icon:hover {
            color: #F9F6EE;
        }
    `}</style>
    </>)
}