import ContactInput from '../components/ContactInput'
import RandomCaze from '../components/RandomCaze'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Open Zap</h1>

      <RandomCaze />
      <ContactInput />
    </div>
  )
}
