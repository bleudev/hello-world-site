import { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
        <div className='navbar'>
            <div className='navlogo'>
                Hello, world
            </div>
            <div className='navlink'>
                <a href="/learn">Learn</a>
            </div>
            <div className='navlink'>
                <a href="/test">Test</a>
            </div>
        </div>
        )
    }
}