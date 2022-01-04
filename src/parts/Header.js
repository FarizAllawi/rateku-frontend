import React , {useEffect, useState}from 'react'
import propTypes from 'prop-types'

import Button from 'elements/Button'
import Logo from 'parts/icon/iconLogoText'

export default function Header(props) {

    const {
        fullName,
        type,
        content,
    } = props

    const [toggle, setToggle] = useState(false) 

    function toggleButton() {
        setToggle(() => !toggle)
        props.collapse(!toggle)
    }

    useEffect(() => {
        // window.addEventListener("click", toggleButton);
        return () => {
            // window.removeEventListener("click", toggleButton);
        };
    })

    const getNavLinkClass = path => {
    }

    

    return (
        (content === "influencer") ? (
            (type === "desktop") ? (
                <header className="header fixed-top mb-auto">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                                <Logo className="header-icon"/> <span className="text-white ms-n1">for Influencer</span> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className={`nav-item ${getNavLinkClass("/")}`}>
                                    <Button className="button-username text-decoration-none border-0 text-center text-white mt-2 py-2 px-4"
                                            type="button"
                                            isRounded
                                    >
                                        { fullName }
                                    </Button>
                                </li>
                            </ul>
                        </nav>   
                    </div>
                </header>
            ) : (
                <header className="header fixed-top mb-auto">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="col-8">
                                <Logo className="header-icon"/> <span className="text-white ms-n1">for Influencer</span> 
                            </div>
                            <div className="col-4">
                                <div className={`hamburger float-end ${toggle ? 'open' : ''}`} data-bs-toggle="collapse" onClick={()=> {toggleButton()}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </nav>   
                    </div>
                </header>
            )
        ) : (
            <div className="text-white">Brand</div>
        )

        
    )
}

Header.defaultProps = {
    firstName: "Nama Pengguna",
    type: "desktop"
}

Header.propTypes = {
    onClick: propTypes.func,
    type: propTypes.string,
    content: propTypes.string,
    firstName: propTypes.string,
}
