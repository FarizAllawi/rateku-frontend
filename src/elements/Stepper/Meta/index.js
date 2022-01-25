import React from 'react'
// import Fade from 'react-reveal/Fade'
// import Slide from 'react-reveal/Slide'
import LogoIcon from 'parts/icon/iconLogo'

export default function Meta({data, current}) {

    return (
        <>
            {/* <Fade delay={300}> */}
                {/* <Slide delay={600} bottom> */}
                    <div className="logo col-xl-12 mt-3">
                        <div className="col-lg-12 mb-4">
                            <LogoIcon/>
                        </div>
                    </div>
                {/* </Slide>   */}
                {/* <Fade left cascade delay={1200}> */}
                    <h1 className="text-caption fw-bold fs-1 mb-4 text-white">{data[current].description}</h1>
                {/* </Fade> */}
            {/* </Fade> */}
        </>
    )
}
