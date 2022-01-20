import React, { Component } from 'react'
import LogoIcon from 'parts/icon/iconLogo'
import LogoText from 'parts/icon/iconText'
import Button from 'elements/Button'
import Footer from 'parts/Footer'
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide'


export default class LandingPage extends Component {

    render() {
        return (
            <>
                <div className="padding-page container px-4">
                    {/* <Fade delay={300}>
                        <Slide delay={600} bottom> */}
                            <div className="logo col-xl-12">
                                <div className="col-lg-12">
                                    <LogoIcon/>
                                </div>
                                <div className="col-lg-12">
                                    <LogoText/>
                                </div>
                            </div>
                        {/* </Slide>
                    </Fade> */}
                    
                    {/* <Fade left delay={900}> */}
                        <div className="col-xl-12 col-11 mb-5">
                            {/* <Fade left cascade delay={1200}> */}
                                <h1 className="text-caption fw-bold fs-1 mt-3 mb-4 text-white">Gabung Rateku sekarang!</h1>
                            {/* </Fade> */}
                            
                            <div className="mt-2 mb-2 d-grid gap-2">

                                <Button className="button-signup fw-bold text-decoration-none text-center"
                                        type="link"
                                        href="/signup-influencer" 
                                        isPrimary 
                                        isLarge 
                                        isRounded
                                >
                                    Daftar sebagai Influencer
                                </Button>

                                <div className="center-line col-lg-12 my-1">
                                    <div className="d-flex align-items-center">
                                        <div className="line float-start"></div>
                                        <div className="text-white text-center" style={{ width: "10%"}}>or</div>
                                        <div className="line float-end"></div>
                                    </div>
                                </div>

                                <Button className="button-signup fw-bold text-decoration-none text-center"
                                        type="link"
                                        href="/signup-brand" 
                                        isPrimary 
                                        isLarge 
                                        isRounded
                                >
                                    Daftar sebagai Brand
                                </Button>
                                <p className="terms-text text-white" style={{fontSize: "0.75rem"}}>
                                    By signing up, you agree to the 
                                    <span className='text-primary'> Terms of Service</span> and <span className='text-primary'>Privacy Policy</span>, 
                                    including <span className='text-primary'>Cookie Use</span>.
                                </p>

                                <div className='text-question text-white fw-bold fs-3'>
                                    Sudah punya akun?
                                </div>
                                <Button className="button-signin py-2 fw-bold text-decoration-none text-center btn-border btn-hover"
                                        type="link"
                                        href="/signin" 
                                        isLarge 
                                        isRounded
                                >
                                    Masuk
                                </Button>
                                {/* <div style={{height:"15vh"}}></div> */}
                            </div>
                        </div>
                    {/* </Fade> */}
                    
                    <Footer />
                </div>
            </>
        )
    }
}
