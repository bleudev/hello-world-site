import { Component } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.Component.css'

export default class NavBar extends Component {
    render() {
        return (
        <div className={styles.navbar}>
            <div className='navlogo'>
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
}