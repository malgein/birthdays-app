import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import data from '../data'
import List from '../components/List'

export default function Home() {

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className={styles.container}>
        <h3>{data.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=> setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  )
}
