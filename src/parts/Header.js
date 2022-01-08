import React , {Children, useEffect, useState}from 'react'
import propTypes from 'prop-types'

import Button from 'elements/Button'
import Logo from 'parts/icon/iconLogoText'
import SearchIcon from 'assets/images/search-icon.svg'


export default function Header(props) {

    const {
        fullName,
        type,
        content,
        children
    } = props

    const [toggle, setToggle] = useState(false) 
    const items = Children.toArray(children)

    function toggleButton() {
        console.log("TRUE")
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
            (type === "desktop") ? (
                <header className="header fixed-top mb-auto">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="w-25">
                                <Logo className="header-icon"/> <span className="text-white ms-n1">for Brand</span> 
                            </div>
                            <div className="w-75 ps-3">
                                {
                                    items?.map((item , index) => {
                                        return (
                                            <li className="nav-item mb-1" key={index}>
                                                {item.props.children}
                                            </li>
                                        )
                                    })
                                }
                            </div>
                            <div className="w-auto">
                                <li className={`float-end nav-item ${getNavLinkClass("/")}`}>
                                    <Button className="button-username text-decoration-none border-0 text-center text-white mb-4"
                                            style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem", paddingLeft:"2.5rem", paddingRight: "2.5rem"}}
                                            type="button"
                                            isRounded
                                    >
                                        { fullName }
                                    </Button>
                                </li>
                            </div>
                        </nav>   
                    </div>
                </header>
            ) : (
                <header className="header fixed-top mb-auto">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="w-auto">
                                <div className='align-items-center justify-content-center'>
                                    <div className="col-12">
                                        <Logo className="header-icon"/> <span className="text-white ms-n1">for Brand</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className={`float-start`}>
                                    <Button className="button-username text-decoration-none border-0 text-center text-white"
                                            style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft:"1.5rem", paddingRight: "1.5rem", fontSize:"10pt"}}
                                            type="button"
                                            isRounded
                                    >
                                        { fullName }
                                    </Button>
                                </div>
                                <div className={`float-end mt-1`} data-bs-toggle="collapse" onClick={()=> {toggleButton()}} style={{marginLeft:"0.5rem"}}>
                                    <img src={SearchIcon} alt="icon-search" width="24" height="24"/>
                                </div>
                            </div>
                        </nav>   
                    </div>
                </header>
            )
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
