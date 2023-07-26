import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Menu from '@/components/menu/menu'
import { Destination } from '@/interfaces/interfaces'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
          <div className={styles.body}>
              <Menu></Menu>
              <div className={styles.bodyContent}>
                  <div className={styles.mainContent}>
                      <h3>SO, YOU WANT TO TRAVEL TO</h3>
                      <h1>SPACE</h1>
                      <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                  </div>
                  <div className={styles.explore}>
                      <button>EXPLORE</button>
                  </div>
              </div>
          </div>
      
    </div>
  )
}
