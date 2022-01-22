import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="TODO APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li>
          <Button>
            <Link href="/sample">
              <a>sample page</a>
            </Link>
          </Button>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Home
