import React from 'react'
import Button from 'elements/Button'
import Icon from 'assets/images/rateku-logo-icon.svg'

export default function iconLogo() {
    return (
        <Button className="navbar-brand" href="/" type="link">
            <img src={Icon} className="logo-icon" alt="rateku-icon"/>
        </Button>
    )
}
