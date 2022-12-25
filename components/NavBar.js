import { Component } from 'react'
import Link from 'next/link'
import '../styles/NavBar.Component.css'

export default class NavBar extends Component {
    render() {
        return (
        <div className='navbar'>
            <div className='navlogo'>
                Hello, world
            </div>
            <div className='navlink'>
                <Link href='/learn'>
                    <a>Learn</a>
                </Link>
            </div>
            <div className='navlink'>
                <Link href='/test'>
                    <a>Test</a>
                </Link>
            </div>
        </div>
        )
    }
}