import React from 'react'
import propTypes from 'prop-types'

export default function Footer(props) {
    
    const className = [props.footerContainer]
    if (props.footerContainer) className.push(props.footerContainer)

    return (
        <footer className="footer fixed-bottom mt-auto py-3">
            <div className={`container ${className.join(' ')}`}>
                <p className="text-white">
                    Blog | About <br/>
                    © 2021 | Rateku.com. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

Footer.prototypes = {
    footerContainer: propTypes.string,
}