import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <p>Tool page checker</p>
    </div>
  )
}
