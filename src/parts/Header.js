import React from 'react'
import Button from 'elements/Button'
import LogoIcon from 'parts/icon/iconLogo'
import { Link } from 'react-router-dom'


export default function Header(props) {

    console.log(props)

    const getNavLinkClass = path => {
    }

    return (
        <header className='spacing-sm'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light p-4">
                    <div className="navbar-brand">
                        <LogoIcon/> Rateku for Influencer
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button className="nav-link text-white" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>   
            </div>
        </header>
    )
}
