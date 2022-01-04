import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types'

export default function Footer(props) {

    const [screenHeightResize, setScreenHeightResize] = useState(false)
    const [screenHeight] = useState(window.innerHeight)
    
    const className = [props.footerContainer]
    if (props.footerContainer) className.push(props.footerContainer)

    useEffect(() => {
        // Detect virtual keyboard on mobile screen
        window.addEventListener("resize", updateWindowDimensions.bind());
        return () => {
            window.removeEventListener("resize", updateWindowDimensions.bind());
        };
    })

    function updateWindowDimensions() {
        if (window.innerWidth < 1024  && window.innerHeight < screenHeight) {
            setScreenHeightResize(() => true )
        }

        if (window.innerWidth < 1024 && window.innerHeight === screenHeight) {
            setScreenHeightResize(() =>  false )
        }
    }

    return (
        <footer className={`${screenHeightResize ? 'd-none': 'footer fixed-bottom mt-auto py-3'} `} style={props.style}>
            <div className={`container ${className.join(' ')}`}>
                <p className="text-gray">
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