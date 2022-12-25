import Link from 'next/link'

export default function NavBar() {
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