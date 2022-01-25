
import React, { Component} from 'react'
import { Navigate  } from 'react-router-dom';

import LogoIcon from 'parts/icon/iconLogo'
import Input from 'elements/Form/Input'
import Switch from 'elements/Form/Switch'
import Button from 'elements/Button'
import Footer from 'parts/Footer'

export default class Signin extends Component {
    state = {
        data: {
            emailOrNumber: "",
            password: "",
            toggle: "influencer",
        },
        validation: {
            emailOrNumber: false,
            password: false,
            validationMessage: ""
        },
        redirect: false,
        
    }


    submit = (event) => {
        event.preventDefault()
        const {validation, data} = this.state

        if ((data.emailOrNumber === "" && data.password === "") || (validation?.emailOrNumber || validation?.password)) {
            this.setState({ validation:{ validationMessage: "Mohon isi data dengan benar..." }});
        }else {
            // HIT API HERE

            // redirect
            this.setState({ 
                redirect: true,
                validation:{ validationMessage: "" 
            }});

            
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            },
            validation: {
                ...this.state.validation,
                [event.target.name] : event.target.validation
            }
        })
    }
    
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const { data, validation, redirect } = this.state
        
        if (redirect) {
            return <Navigate to={`/${data.toggle}`}/>
        }
        
        return (

            <div className="padding-page container px-4">
                <div className="no-scroll-bar">
                    <div className="logo col-12 col-xl-6 mb-4 mt-3">
                        <LogoIcon/>
                    </div>
                
                    <form className="col-12" onSubmit={this.submit}>
                        <h1 className="text-caption fw-bold fs-1 mt-3 mb-4 text-white">Masuk ke akun kamu!</h1>
                        
                        <div className="switch-toggle col-12 col-xl-6">
                            <Switch name="toggle" 
                                    value={data.toggle} 
                                    onClick={this.onChange}
                                    defaultValue="influencers">
                                <option value="influencer">Influencers</option>
                                <option value="brand">Brands</option>
                            </Switch>
                        </div>

                        <div className="col-12 col-xl-6">
                            <Input  type="text"
                                    name="emailOrNumber"
                                    value={data.emailOrNumber}
                                    pattern="^(?:(^\+62|62|^08)(\d{3,5}-?){2}\d{2,3}|^[^\s@]+@[^\s@]+\.[^\s@]+)$"
                                    onChange={this.onChange}
                                    placeholder="Email atau nomor telephone"
                                    errorResponse="Format nomor telephone atau email salah"
                                    validation={validation.emailOrNumber}/>
                        </div>

                        <div className="col-12 col-xl-6">
                            <Input  type="password"
                                    name="password" 
                                    value={data.password} 
                                    onChange={this.onChange}
                                    placeholder="password"
                                    validation={validation.password}/>
                        </div>

                        <div className="col-12 col-xl-6">
                            <div className="row">
                                <div className="col-12">
                                    <Button className="btn btn-link text-decoration-none px-0 mt-n3 float-start"
                                            style={{ marginTop: "-0.5rem"}}
                                            type="link"
                                            href="/"
                                    >
                                        {"Lupa Password?"}
                                    </Button>
                                </div>
                                
                                {
                                    validation.validationMessage && (
                                        <div className="col-12">
                                            <p className="text-danger" style={{ position: "absolute"}}>{this.state.validation.validationMessage}</p>
                                        </div>
                                    )
                                }

                                <div className="col-12">
                                    <div className="d-grid mt-5">
                                        <Button className="py-1 px-5 mb-3 fw-bold text-decoration-none text-center btn-primary btn-hover"
                                                type="submit"
                                                isLarge 
                                                isRounded
                                        >
                                            Masuk
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="row mb-5">
                        <div className="col-4 col-xl-2">
                            <div className="d-grid float-start">
                                <span className="text-option">
                                    <Button className="btn-link text-decoration-none px-0 text-gray text-option"
                                            type="link"
                                            href="/"
                                            isLarge
                                    >
                                        {"< Kembali"}
                                    </Button>
                                </span>
                            </div>
                        </div>
                        <div className="col-8 col-xl-4">
                            <div className="d-grid float-end">
                                <span className='text-option'>
                                    Belum punya akun?
                                    <Button className="btn-link text-decoration-none px-0 text-option text-primary"
                                            type="link"
                                            href={`/signup-${data.toggle}`}
                                            isLarge
                                    >
                                        {" Daftar"}
                                    </Button>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                    <Footer style={{marginTop: "8.85rem", marginBottom:"5rem"}}/>
                </div>
            </div>
        )
    }
}
