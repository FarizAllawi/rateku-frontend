import React from 'react'
import Button from 'elements/Button'

import Icon from 'assets/images/rateku-logo-iconText.svg'

export default function IconLogoText(props) {
    const {
        className,
        style,
        width,
        height
    } = props

    return (
        <Button className="navbar-brand" href="/" type="link">
            <img src={Icon} className={`logo-icon ${className}`} width={width} height={height} style={style} alt="rateku-icon" />
        </Button>
    )
}
