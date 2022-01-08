import React, { Component } from 'react'

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import Input from 'elements/Form/Input'
import Button from 'elements/Button'
import SearchIcon from 'assets/images/search-icon.svg'
import {ReactComponent as FilterIcon} from 'assets/images/filter-icon.svg'
import Checkbox from 'elements/Form/CheckBox'
import RateCard from 'elements/RateCard'

export default class BrandSearch extends Component {

    state = {
        data: {
            firstName: "",
            lastName: "",
            jabodetabek:false,
            bandung:false,
            jakarta:false,
            bekasi:false,
            tangerang:false,
            depok:false,
            bogor:false,
            male:false,
            female:false
        },
        dataRateCard: [],
        search: "",
        searchQuery: "",
        screenWidth: "",
        collapse: false,
        profile : false,
        profileStatus: false,
    }

    onChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
        console.log(this.state.data.jabodetabek)
    }

    onFilterChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
        // console.log(event)
        console.log("true")
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));


        // HIT API
        const axios = require('axios');
        const result = axios.get('https://61cbbf49194ffe0017788ddd.mockapi.io/Ratecard')
        result.then(result => this.setState({...this.state, dataRateCard: result.data}))
                .catch(error => { console.error(error); throw error; });
        
        this.setState({
            ...this.state,
            searchQuery: "Fashion",
            data: {
                ...this.state.data,
                firstName: "Jhon",
                lastName: "Doe",
            },
        })
        // 

        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }
    
    updateWindowDimensions() {
       this.setState({ screenWidth: window.innerWidth });
    }

    render() {
        const { data } = this.state
        const { dataRateCard } = this.state 
        const type = this.state.screenWidth < 1200 ? "mobile" : "desktop"
        return (
            <>
                <Header type={type} content="brand" fullName={data.firstName+' '+data.lastName} collapse={collapseStatus => this.setState({ collapse: collapseStatus})}>
                    <li className="nav-item">
                        <form className="d-flex align-items-center" onSubmit={this.submit}>
                            <div className="w-75">
                                <Input  name="search"
                                        prepend={<img src={SearchIcon} alt="icon-search"/>}
                                        inputClassName="text-white"
                                        outerClassName="search-box"
                                        value={this.state.search} 
                                        onChange={this.onChange}
                                        placeholder="Cari influencers berdasarkan tipe konten"/>
                            </div>
                            <div className="w-auto" style={{ marginTop:"-1rem" }}>
                                <Button className="button-username text-decoration-none border-0 rounded-3 text-center px-5 mt-n3"
                                        style={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", background: "#C3EBE2"}}
                                    type="submit"
                                >
                                    Cari
                                </Button>
                            </div>
                        </form>
                    </li>
                </Header>

                <div className="container">
                    <div className="row">
                        {
                            (type === "mobile") ? (
                                <div className={`${this.state.collapse === true ? 'visible' : 'invisible d-none'}`}>
                                    <div className="menu-container pt-5 mt-5">
                                        <div className="menu-overlay" style={{ zIndex: "5" }}>
                                            <form className="d-flex align-items-center" onSubmit={this.submit}>
                                                <div className="w-75">
                                                    <Input  name="search"
                                                            prepend={<img src={SearchIcon} alt="icon-search"/>}
                                                            outerClassName="search-box"
                                                            inputClassName="text-white"
                                                            value={this.state.search} 
                                                            onChange={this.onChange}
                                                            placeholder="Cari influencers berdasarkan tipe konten"/>
                                                </div>
                                                <div className="w-auto" style={{ marginTop:"-1rem" }}>
                                                    <Button className="button-username text-decoration-none border-0 rounded-3 text-center px-5 mt-n3"
                                                            style={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", background: "#C3EBE2"}}
                                                        type="submit"
                                                    >
                                                        Cari
                                                    </Button>
                                                </div>
                                            </form>
                                            <div className="flex-column flex-nowrap vh-100 overflow-auto text-white mt-3">
                                                <p className="h5 fw-bold"><span><FilterIcon width="16" height="16" style={{marginRight:"1.5rem", marginBottom:"0.2rem"}}/></span>SEARCH FILTER</p>
                                                <p className="h6 fw-bold mt-4">City</p>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Jabodetabek" 
                                                            labelName='Jabodetabek' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, jabodetabek: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Bandung" 
                                                            labelName='Bandung' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, bandung: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Jakarta" 
                                                            labelName='Jakarta' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, jakarta: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Bekasi" 
                                                            labelName='Bekasi' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, bekasi: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Tangerang" 
                                                            labelName='Tangerang' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, tangerang: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Depok" 
                                                            labelName='Depok' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, depok: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Bogor" 
                                                            labelName='Bogor' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, bogor: checkedStatus}})}/>
                                                </div>
                                                <p className="h6 fw-bold mt-4">Jenis Kelamin</p>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Male" 
                                                            labelName='Laki-laki' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, male: checkedStatus}})}/>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <Checkbox name="Female" 
                                                            labelName='Perempuan' 
                                                            checked={checkedStatus => this.setState({data:{ ...this.state.data, perempuan: checkedStatus}})}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-xl-2 position-fixed pt-5 mt-5">
                                    <div className="flex-column flex-nowrap vh-100 overflow-auto text-white mt-4">
                                        <p className="h5 fw-bold"><span><FilterIcon width="16" height="16" style={{marginRight:"1.5rem", marginBottom:"0.2rem"}}/></span>SEARCH FILTER</p>
                                        <p className="h6 fw-bold mt-4">City</p>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Jabodetabek" 
                                                    labelName='Jabodetabek' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jabodetabek: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bandung" 
                                                    labelName='Bandung' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bandung: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Jakarta" 
                                                    labelName='Jakarta' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jakarta: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bekasi" 
                                                    labelName='Bekasi' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bekasi: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Tangerang" 
                                                    labelName='Tangerang' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, tangerang: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Depok" 
                                                    labelName='Depok' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, depok: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bogor" 
                                                    labelName='Bogor' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bogor: checkedStatus}})}/>
                                        </div>
                                        <p className="h6 fw-bold mt-4">Jenis Kelamin</p>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Male" 
                                                    labelName='Laki-laki' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, male: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Female" 
                                                    labelName='Perempuan' 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, perempuan: checkedStatus}})}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        

                        <div className={`col-xl-10 col-12 ${type !== 'mobile' ? 'offset-2  ps-5' : ''}`}>
                            <div className={`${type === 'mobile' && this.state.collapse === true ? 'd-none' : 'visible'} ${type !== 'mobile' ? 'ps-5' : ''}`}>
                                <p className={`${type !== 'mobile' ? 'h5' : 'h6'}  text-white `} style={{marginTop:"7.25rem"}}>Hasil pencarian influencers yang sesuai untuk tipe konten {this.state.searchQuery}</p>
                                <div className="row mt-4 py-0 pt-1 mb-5 pb-5">
                                    {
                                            dataRateCard?.map((item, index) => {
                                                return <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3  col-xxl-3 mb-4" key={index}>
                                                    <RateCard item={item}/>
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                            
                    </div>

                    <Footer style={{ zIndex: "9999"}} />
                </div>
            </>
        )
    }
}
