import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import { Navigate  } from 'react-router-dom';

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import BrandSearchContent from 'parts/BrandSearchContent'
import Input from 'elements/Form/Input'
import Button from 'elements/Button'
import SearchIcon from 'assets/images/search-icon.svg'
import PreviousIcon from 'assets/images/previous-arrow.svg'
import NextIcon from 'assets/images/next-arrow.svg'
import {ReactComponent as FilterIcon} from 'assets/images/filter-icon.svg'
import {ReactComponent as FilterIconPrimary} from 'assets/images/filter-icon-primary.svg'
import Checkbox from 'elements/Form/CheckBox'


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
        search: "",
        screenWidth: "",
        collapse: false,
        profile : false,
        profileStatus: false,
        mobileFilter: false,
        pageCount:0,
        perPage: 24,
        currentPage: 0,
        offset: 0 ,
        dataRateCardOri: [],
        dataRateCard: [],
        redirect: false,
        selectWrapper: React.createRef()
    }

    onChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }

    collapseMobileFilter = (event) => {
        this.setState({
            ...this.state,
            mobileFilter: !this.state.mobileFilter
        })
    }

    resetFilter = () => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                jabodetabek:false,
                bandung:false,
                jakarta:false,
                bekasi:false,
                tangerang:false,
                depok:false,
                bogor:false,
                male:false,
                female:false,
            }
        })
    }

    apply = () => {
        // Hit API

        this.setState({
            ...this.state,
            mobileFilter: false
        })
    }

    onFilterChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
    }

    clickOutside = (event) => {
        if (this.state.selectWrapper && !this.state.selectWrapper.current.contains(event.target)) {
            this.setState({
                ...this.state,
                mobileFilter: false
            })
        }
    }



    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
        window.addEventListener("mousedown", this.clickOutside) 


        // HIT API
        const axios = require('axios');
        axios.get('https://61cbbf49194ffe0017788ddd.mockapi.io/Ratecard')
        .then(result =>{
            
            const data = result.data
            const slice = data.slice(this.state.offset , this.state.offset + this.state.perPage)

            this.setState({
                ...this.state,
                pageCount: Math.ceil(data.length / this.state.perPage), 
                dataRateCardOri: result.data,
                dataRateCard: slice,
            })
        })
        .catch(error => { console.error(error); throw error; })
        
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                firstName: "Jhon",
                lastName: "Doe",
            },
        })
        // 

        this.updateWindowDimensions();
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected
        const offset = selectedPage * this.state.perPage
        
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        })
    }

    loadMoreData() {
        const data = this.state.dataRateCardOri
        const slice = data.slice(this.state.offset , this.state.offset + this.state.perPage)
        this.setState({
            ...this.state,
            pageCount: Math.ceil(data.length / this.state.perPage), 
            dataRateCard: slice,
        })
        window.scrollTo(0, 0)
    }

    submit = (event) => {
        event.preventDefault()
        this.setState({ redirect: true })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
        
    }
    
    updateWindowDimensions() {
       this.setState({ screenWidth: window.innerWidth });
    }

    render() {
        const { data } = this.state
        const { dataRateCard } = this.state 
        const type = this.state.screenWidth < 1200 ? "mobile" : "desktop"

        if (this.state.redirect) {
            return <Navigate to={`/brand/search/${this.state.search.toLowerCase()}`}/>
        }

        return (
            <>
                <Header type={type} content="brand" className='has-shadow' fullName={data.firstName+' '+data.lastName} collapse={collapseStatus => this.setState({ ...this.state, collapse: collapseStatus})}>
                    {
                        (type === 'desktop') ? (
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
                        ) : (
                            <form onSubmit={this.submit}>
                                <div className="w-100">
                                    <Input  name="search"
                                            prepend={<img src={SearchIcon} alt="icon-search"/>}
                                            inputClassName="text-white"
                                            outerClassName="search-box"
                                            value={this.state.search} 
                                            onChange={this.onChange}
                                            placeholder="Cari influencers berdasarkan tipe konten"/>
                                </div>
                                <div className="w-auto">
                                    <Button className="btn btn-link text-decoration-none" style={{width:"70px", paddingLeft:"0rem", paddingRight:"0"}}
                                            type="button"
                                            onClick={this.collapseMobileFilter}
                                            >
                                        <span className='fs-6 text-primary float-end'><FilterIconPrimary width="16" height="16" style={{marginRight:"0.5rem",marginBottom:"0.2rem", }}/>Filter</span> 
                                    </Button>
                                </div>
                            </form>
                        )
                    }
                </Header>
                <div className={`${this.state.mobileFilter === true ? 'position-fixed d-flex justify-content-center align-items-center' : 'd-none'}`} style={{ width:"100%", height:"100vh", background:"rgba(0, 0, 0, 0.7)", zIndex:"9999" }}>
                        <div className="col-11 text-white px-3 py-4" style={{ background:"#0C1F36", zIndex:"99999",borderRadius:"1.5rem" }} ref={this.state.selectWrapper}>
                            <div className="container-fluid">    
                                <div className="row py-2">
                                    <p className="h5 fw-bold">SEARCH FILTER</p>
                                    <p className="h6 fw-bold mt-4">City</p>

                                    <div className="row">
                                        <div className="col-6 pe-0 mt-2">
                                            <Checkbox name="Jabodetabek" 
                                                    labelName='Jabodetabek' 
                                                    value={data.jabodetabek}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jabodetabek: checkedStatus}})}/>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <Checkbox name="Bandung" 
                                                    labelName='Bandung'
                                                    value={data.bandung} 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bandung: checkedStatus}})}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mt-2">
                                            <Checkbox name="Jakarta" 
                                                    labelName='Jakarta'
                                                    value={data.jakarta} 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jakarta: checkedStatus}})}/>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <Checkbox name="Bekasi" 
                                                    labelName='Bekasi'
                                                    value={data.bekasi} 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bekasi: checkedStatus}})}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6  mt-2">
                                            <Checkbox name="Tangerang" 
                                                    labelName='Tangerang'
                                                    value={data.tangerang}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, tangerang: checkedStatus}})}/>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <Checkbox name="Depok" 
                                                    labelName='Depok'
                                                    value={data.depok}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, depok: checkedStatus}})}/>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <Checkbox name="Bogor" 
                                                labelName='Bogor'
                                                value={data.bogor}
                                                checked={checkedStatus => this.setState({data:{ ...this.state.data, bogor: checkedStatus}})}/>
                                    </div>
                                    <div className="row">
                                        <p className="h6 fw-bold mt-4">Jenis Kelamin</p>
                                        <div className="col-6 mt-2">
                                            <Checkbox name="Male" 
                                                    labelName='Laki-laki'
                                                    value={data.male}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, male: checkedStatus}})}/>
                                        </div>
                                        <div className="col-6 pe-0 mt-2">
                                            <Checkbox name="Female" 
                                                    labelName='Perempuan'
                                                    value={data.female}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, female: checkedStatus}})}/>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-row-reverse mt-4'>
                                        <Button className="px-4 py-1  fs-6 fw-bold text-decoration-none border-0 text-center"
                                            type="buton"
                                            isPrimary
                                            isRounded
                                            onClick={this.apply}
                                        >
                                            Terapkan
                                        </Button>
                                        <Button className="button-reset py-1 px-4 fs-6 me-3 fw-bold text-decoration-none text-center btn-border"
                                                type="button"
                                                isLarge 
                                                isRounded
                                                onClick={this.resetFilter}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="container">
                    <div className="row mb-5 pb-5">
                        {
                            (type === "desktop") ? (
                                <div className="col-xl-2 position-fixed pt-5 mt-5">
                                    <div className="flex-column flex-nowrap vh-100 overflow-auto text-white mt-4">
                                        <p className="h5 fw-bold"><span><FilterIcon width="16" height="16" style={{marginRight:"1.5rem", marginBottom:"0.2rem"}}/></span>SEARCH FILTER</p>
                                        <p className="h6 fw-bold mt-4">City</p>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Jabodetabek" 
                                                    labelName='Jabodetabek'
                                                    value={data.jabodetabek}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jabodetabek: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bandung" 
                                                    labelName='Bandung'
                                                    value={data.bandung}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bandung: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Jakarta" 
                                                    labelName='Jakarta'
                                                    value={data.jakarta}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, jakarta: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bekasi" 
                                                    labelName='Bekasi' 
                                                    value={data.bekasi}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bekasi: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Tangerang" 
                                                    labelName='Tangerang'
                                                    value={data.tangerang}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, tangerang: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Depok" 
                                                    labelName='Depok' 
                                                    value={data.depok}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, depok: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Bogor" 
                                                    labelName='Bogor'
                                                    value={data.bogor} 
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, bogor: checkedStatus}})}/>
                                        </div>
                                        <p className="h6 fw-bold mt-4">Jenis Kelamin</p>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Male" 
                                                    labelName='Laki-laki'
                                                    value={data.male}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, male: checkedStatus}})}/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <Checkbox name="Female" 
                                                    labelName='Perempuan'
                                                    value={data.female}
                                                    checked={checkedStatus => this.setState({data:{ ...this.state.data, perempuan: checkedStatus}})}/>
                                        </div>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                        
                        <BrandSearchContent dataRateCard={dataRateCard} collapseStatus={this.state.collapse}/>
                        <div className={`col-xl-10 col-12 ${type !== 'mobile' ? 'offset-2  ps-5' : ''}`}>
                            <div className="d-flex justify-content-center">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={<img src={NextIcon} alt="next-icon"/>}
                                    previousLabel={<img src={PreviousIcon} alt="previous-icon"/>}
                                    breakClassName="break-me"
                                    onPageChange={this.handlePageClick}
                                    pageRangeDisplayed={4}
                                    pageCount={this.state.pageCount}
                                    containerClassName="pagination"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    nextClassName="page-item"
                                    previousLinkClassName="page-link previous"
                                    nextLinkClassName="page-link next"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </div>
                        
                            
                    </div>
                    {
                        (type === 'desktop') ? (
                            <Footer fixedFooter  desktopClassName="container" style={{ zIndex: "9999"}} />
                        ) : (
                            <Footer style={{ zIndex: "9999"}} />
                        )
                    }
                    
                </div>
            </>
        )
    }
}
