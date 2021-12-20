import React from 'react'
import Button from 'elements/Button'
import Icon from 'assets/images/rateku-logo-text.svg'

export default function iconText() {
    return (
        <Button className="navbar-brand" href="/" type="link">
            <img src={Icon} className="logo-text" alt="rateku-icon"/>
        </Button>
    )
}
