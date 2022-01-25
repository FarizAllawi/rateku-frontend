import React, {Component} from 'react'
// import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'
import Stepper , {
    Meta,
    MainContent,
    Controller

}from "elements/Stepper"

import Signup from 'parts/Signup/SignUp'
import InfluencerForm from 'parts/Signup/InfluencerForm'
import CompleteInfluencer from 'parts/Signup/CompleteInfluencer'
import Footer from 'parts/Footer'
import "assets/scss/style.scss"


export default class SignUpInfluencer extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            telephone: "",
            email:"",
            password:"",
            passwordConf:"",
            gender:"",
            date:"",
            month:"",
            year: "",
            instagram: "",
            contentType: [],
            referalCode: "",
            knowRateku: ""
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
    }

    setContentType = (contentType) => {
        this.setState({
            data: {
                ...this.state.data,
                contentType: contentType
            }
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const { data } = this.state
        // console.log(data)
        const steps = {
            signup: {
                title: "Signup Rateku",
                description: "Buat akun Kamu!",
                content: (
                    <Signup data={data} onChange={this.onChange}/>
                )
            },
            influencerForm: {
                title: "Signup Rateku",
                // description: (<Fade left cascade delay={300}>Satu langkah lagi!</Fade>),
                description: "Satu langkah lagi!",
                content: (
                    <InfluencerForm data={data} onChange={this.onChange} setContentType={this.setContentType}/>
                )
            },
            completeInfluencer: {
                title: "Signup Rateku",
                // description: (<Fade left delay={600}>Akun kamu berhasil dibuat!</Fade>),
                description: "Akun kamu berhasil dibuat!",
                content: (
                    <CompleteInfluencer data={data} onChange={this.onChange}/>
                )
            }
        }
        return (
            <>
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <div className='no-scroll-bar'>
                                <div className='padding-page container px-4'>
                                    <Meta data={steps} current={CurrentStep} />
                                    <MainContent data={steps} current={CurrentStep} />
                                        {CurrentStep === "signup" && (
                                            <div className="stepper-controller">
                                                <div className="col-12 col-lg-12 col-xl-6">
                                                    <div className="row mt-5">
                                                        <Controller>
                                                            <div className="col-6 px-0">
                                                                {/* <Fade delay={1200}> */}
                                                                    <Button className="btn btn-link text-decoration-none float-start"
                                                                            type="link"
                                                                            href="/"
                                                                            isLarge 
                                                                    >
                                                                        {"< Kembali"}
                                                                    </Button>
                                                                {/* </Fade> */}
                                                            </div>
                                                            <div className="col-6">
                                                            {
                                                                data.firstName !== "" &&
                                                                data.lastName !== "" &&
                                                                data.email !== "" &&
                                                                data.telephone !== "" &&
                                                                data.password !== "" &&
                                                                data.passwordConf !== "" &&
                                                                data.date !== "" &&
                                                                data.month !== "" &&
                                                                data.year !== "" &&
                                                                data.gender !== "" && (
                                                                    // <Fade delay={300}>
                                                                        <Button className="button-next fw-bold text-decoration-none text-center px-5 float-end border-0"
                                                                                type="button"
                                                                                isPrimary 
                                                                                isRounded
                                                                                isLarge 
                                                                                onClick={nextStep}
                                                                        >
                                                                            Lanjutkan
                                                                        </Button>
                                                                    // </Fade>
                                                                )
                                                            }
                                                            </div>
                                                        </Controller>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        

                                        {CurrentStep === "influencerForm" && (
                                            <div className="stepper-controller" style={{marginBottom: "9.5rem"}}>
                                                <div className="col-12 col-lg-12 col-xl-6">
                                                    <div className="row" style={{marginTop: "5.5rem"}}>
                                                        <Controller>
                                                            <div className="col-6 px-0 mt-4 mb-5" >
                                                                {/* <Fade delay={1200}> */}
                                                                    <Button className="btn btn-link text-decoration-none float-start"
                                                                            type="button"
                                                                            isLarge 
                                                                            onClick={prevStep}
                                                                    >
                                                                        {"< Kembali"}
                                                                    </Button>
                                                                {/* </Fade> */}
                                                            </div>
                                                            <div className="col-6 mt-4" >
                                                            {
                                                                data.instagram !== "" &&
                                                                data.contentType.count !== 0 &&
                                                                data.knowRateku !== "" && (
                                                                    // <Fade delay={300}>
                                                                        <Button className="button-next fw-bold text-decoration-none text-center px-5 float-end border-0"
                                                                                type="button"
                                                                                isPrimary 
                                                                                isRounded
                                                                                isLarge 
                                                                                onClick={nextStep}
                                                                        >
                                                                            Lanjutkan
                                                                        </Button>
                                                                    // </Fade>
                                                                )
                                                            }
                                                            </div>
                                                        </Controller>
                                                    </div> 
                                                </div>
                                            </div>
                                        )}

                                        {CurrentStep === "completeInfluencer" && (
                                            <div className="stepper-controller" style={{marginBottom: "19.4rem"}}>
                                                <div className="col-12 col-lg-12 col-xl-6">
                                                    <Controller>
                                                        <div className="col-12 col-xl-10">
                                                        {
                                                            // <Fade delay={300}>
                                                                <Button className="button-next fw-bold text-decoration-none text-center float-end border-0"
                                                                        type="link"
                                                                        href="/"
                                                                        isPrimary 
                                                                        isRounded
                                                                        isLarge 
                                                                >
                                                                    Selesai
                                                                </Button>
                                                            // </Fade>
                                                            
                                                        }
                                                        </div>
                                                    </Controller>
                                                </div>
                                            </div>   
                                        )} 
                                    <Footer style={{marginTop: "8rem", marginBottom:"7rem"}}/>
                                </div>
                            </div>
                        )
                    }
                </Stepper>
            </>
        )
    }
    
}
