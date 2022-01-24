import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function Footer(props) {

    const [screenWidth] = useState(window.innerWidth)
    const type = screenWidth < 1200 ? "mobile" : "desktop"

    
    const className = []
    if (type === 'desktop' && props.desktopClassName) className.push(props.desktopClassName)
    if (type === 'mobile' && props.mobileClassName) className.push(props.mobileClassName)

    return (
        <footer className={`${type === 'mobile' ? 'footer mobile': 'footer desktop fixed-bottom '} mt-auto py-3`} style={props.style}>
            <div className={`container ${className.join(' ')}`}>
                <p className={`text-gray `} style={{fontSize:"11pt"}}>
                    Blog | About <br/>
                    © 2021 | Rateku.com. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

Footer.prototypes = {
    desktopClassName: propTypes.string,
    mobileClassName:propTypes.string,
}