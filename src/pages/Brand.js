import React, { Component } from 'react'
import { Navigate  } from 'react-router-dom';

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import Input from 'elements/Form/Input'
import Button from 'elements/Button'
import SearchIcon from 'assets/images/search-icon.svg'

export default class Brand extends Component {

    state = {
        data: {
            firstName: "",
            lastName: "",
        },
        search: "",
        screenWidth: "",
        collapse: false,
        profile : false,
        profileStatus: false,
        redirect: false,
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
        
        // HIT API
        this.setState({
            data: {
                ...this.state.data,
                firstName: "Jhon",
                lastName: "Doe",
            }
        })
        // 

        this.updateWindowDimensions();
    }

    onChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        this.setState({ redirect: true })
    }
    
    componentWillUnmount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }
    
    updateWindowDimensions() {
       this.setState({ screenWidth: window.innerWidth });
    }

    render() {
        const { data } = this.state
        const type = this.state.screenWidth < 1200 ? "mobile" : "desktop"

        if (this.state.redirect) {
            return <Navigate to={`/brand/search/${this.state.search}`}/>
        }

        return (
            <>
                <Header type={type} content="brand" fullName={data.firstName+' '+data.lastName} collapse={collapseStatus => this.setState({ collapse: collapseStatus})}/>
                <div className="container">
                    <div className="row align-items-center justify-content-center"
                         style={{height: "100vh"}}>
                             <div className="col-12 col-lg-8 col-xl-5">
                                <h2 className='text-white text-center'>Cari Influencers dalam waktu singkat.</h2>
                                <form className="d-flex align-items-center" onSubmit={this.submit}>
                                    <div className="w-75">
                                        <Input  name="search"
                                                prepend={<img src={SearchIcon} alt="icon-search"/>}
                                                inputClassName="text-white"
                                                value={this.state.search} 
                                                onChange={this.onChange}
                                                placeholder="Cari influencers berdasarkan tipe konten"/>
                                    </div>
                                    <div className="w-auto" style={{ marginTop:"-1rem" }}>
                                        <Button className="button-username text-decoration-none border-0 rounded-3 text-center px-5 mt-n3"
                                                style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem"}}
                                            type="submit"
                                            isPrimary
                                        >
                                            Cari
                                        </Button>
                                    </div>
                                </form>
                             </div>
                    </div>
                    <Footer style={{ zIndex: "9999"}} />
                </div>
            </>
        )
    }
}
