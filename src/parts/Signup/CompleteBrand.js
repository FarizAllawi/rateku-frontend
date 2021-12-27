import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from 'elements/Button'


export default function CompleteBrand(props) {
    return (
        <div className="padding-page container px-4 mb-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div class="d-flex align-items-center" style={{height: "45vh"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Fade left cascade delay={300}>
                                <h1 className="text-caption fw-bold fs-1 mt-3 mb-4 text-white">Akun kamu berhasil dibuat.</h1>
                            </Fade>
                        </div>
                        <div className="col-12">
                            <Fade delay={900}>
                                <Button className="button-next fw-bold text-decoration-none text-center px-5 border-0"
                                        type="link"
                                        href="/signin"
                                        isPrimary 
                                        isRounded
                                        isLarge 
                                >
                                    Masuk
                                </Button>
                            </Fade>  
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
        </div>
    )
}
