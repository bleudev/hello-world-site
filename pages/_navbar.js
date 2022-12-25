import Link from 'next/link'
import styles from '../styles/NavBar.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navlogo}>
                Hello, world
            </div>
            <div className={styles.navlink}>
                <Link href='/learn'>
                    <a>Learn</a>
                </Link>
            </div>
            <div className={styles.navlink}>
                <Link href='/test'>
                    <a>Test</a>
                </Link>
            </div>
        </div>
    )
}