import { Html, Head, Main } from 'next/document'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import '../styles/Home.module.css'

export default function Home() {
  return (
    <Html>
      <Head>
        <title>Homepage - Visualize</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main>
          <Navbar />
        </Main>
      </body>
    </Html>

  )
}
