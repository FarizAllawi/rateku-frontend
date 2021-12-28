
import React, { Component} from 'react'
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
            toggle: "influencer"
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

        return (

            <>
                <div className="padding-page container px-3">
                    <div className="logo col-12 col-xl-6 mb-5">
                        <LogoIcon/>
                    </div>
                
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
                        <Input  name="emailOrNumber" 
                                value={data.emailOrNumber} 
                                onChange={this.onChange}
                                placeholder="Email atau nomor telephone"/>
                    </div>

                    <div className="col-12 col-xl-6">
                        <Input  type="password"
                                name="password" 
                                value={data.password} 
                                onChange={this.onChange}
                                placeholder="password"/>
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
                        
                            <div className="col-12">
                                <div className="d-grid mt-5">
                                    <Button className="py-1 px-5 mb-3 fw-bold text-decoration-none text-center btn-primary btn-hover"
                                            type="link"
                                            href="/signin" 
                                            isLarge 
                                            isRounded
                                    >
                                        Masuk
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

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
                </div>
                <Footer footerContainer="padding-page px-4"/>
            </>
        )
    }
}
