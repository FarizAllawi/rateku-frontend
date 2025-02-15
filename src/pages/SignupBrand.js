import React, {Component} from 'react'
import Button from 'elements/Button'
// import Fade from 'react-reveal/Fade'

import Stepper , {
    Meta,
    MainContent,
    Controller

}from "elements/Stepper"

import Signup from 'parts/Signup/SignUp'
import CompleteBrand from 'parts/Signup/CompleteBrand'
import BrandForm from 'parts/Signup/BrandForm'
import Footer from 'parts/Footer'
import "assets/scss/style.scss"



export default class SignupBrand extends Component {
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
            companyName:"",
            companyType:"",
            companySize:"",
            location:"",
            instagram:"",
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

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const { data } = this.state
        const steps = {
            signup: {
                title: "Signup Rateku",
                description: "Buat akun Kamu!",
                content: (
                    <Signup data={data} onChange={this.onChange}/>
                )
            },
            brandForm: {
                title: "Signup Rateku",
                // description: (<Fade left cascade delay={300}>Satu langkah lagi!</Fade>),
                description: "Satu langkah lagi!",
                content: <BrandForm data={data} onChange={this.onChange}/>
            },
            completeBrand: {
                title: "Signup Rateku",
                description: "",
                content: (<CompleteBrand data={data} onChange={this.onChange}/>)
            }
        }


        return (
            <>
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <div className="no-scroll-bar">
                                <div className='padding-page container px-4'>
                                    <Meta data={steps} current={CurrentStep} />
                                    <MainContent data={steps} current={CurrentStep} />
                                            {CurrentStep === "signup" && (
                                                <div className="stepper-controller mb-5">
                                                    <div className="col-12 col-lg-12 col-xl-6">
                                                        <div className="row mt-5 ">
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

                                            {CurrentStep === "brandForm" && (
                                                <div className="stepper-controller mb-5">
                                                    <div className="col-12 col-lg-12 col-xl-6">
                                                        <div className="row mt-3 ">
                                                            <Controller>
                                                                <div className="col-6 px-0" style={{marginBottom:"5rem"}}>
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
                                                                <div className="col-6" style={{marginBottom:"5rem"}}>
                                                                {
                                                                    data.companyName !== "" &&
                                                                    data.companyType !== "" &&
                                                                    data.companySize !== "" &&
                                                                    data.location !== "" &&
                                                                    data.instagram !== "" &&
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
