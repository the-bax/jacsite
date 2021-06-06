import Nav from '../Nav'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>The Jac</h1>
      </header>
      <Nav />
      <div className={styles.title}>
        New album &ldquo;Walking Spirits&rdquo; out now!
      </div>
    </>
  )
}
