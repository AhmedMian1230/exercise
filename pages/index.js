import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dataset Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Select a dataset to view
        </h1>

        <div className={styles.grid}>
          <Link href={'/all-datasets'}>
            <a className={styles.card}>
              <h3>All DoD Datasets &rarr;</h3>
              <p>A listing of all datasets within the Department of Defense (DosD)</p>
            </a>
          </Link>
          <Link href={'/savings-dataset'}>
            <a className={styles.card}>
              <h3>DoD IT Reform Cost Savings/Avoidance &rarr;</h3>
              <p>The IT Cost Savings and/or Avoidance for the Department of Defense</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home