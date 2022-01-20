import React, { Component } from 'react'

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import Button from 'elements/Button'
import Input from 'elements/Form/Input'
import Select from 'elements/Form/Select'
import File from 'elements/Form/File'
import Tags from 'elements/Form/Tags'
import IconPlus from 'assets/images/icon-plus.svg'

export default class Influencer extends Component {
    state = {
        data: {
            photo: {},
            firstName: "",
            lastName: "",
            telephone: "",
            instagram: "",
            contentType: [],
            email:"",
            kota:"",
            provinsi:"",
            gender:"",
            date:"",
            month:"",
            year: "",
            story: [],
            feeds: [],
            reels: [],
        },
        screenWidth: "",
        collapse: false,
        profile : false,
        profileStatus: false,
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
    }

    addRateCardStory = () => {
        let data = {...this.state.data}
        data.story = [...this.state.data.story, { price: "", item: "" }]
        this.setState({data})
    }

    addRateCardFeeds = () => {
        let data = {...this.state.data}
        data.feeds = [...this.state.data.feeds, { price: "", item: "" }]
        this.setState({data})
    }

    addRateCardReels = () => {
        let data = {...this.state.data}
        data.reels = [...this.state.data.reels, { price: "", item: "" }]
        this.setState({data})
    }

    storyOnChange = (index, e) => {
        let story = this.state.data.story;
        story[index][e.target.name] = e.target.value;
        this.setState({ story });
    }

    feedsOnChange = (index, e) => {
        let feeds = this.state.data.feeds;
        feeds[index][e.target.name] = e.target.value;
        this.setState({ feeds });
    }

    reelsOnChange = (index, e) => {
        let reels = this.state.data.reels;
        reels[index][e.target.name] = e.target.value;
        this.setState({ reels });
    }

    contentTypeOnChange = () => {

    }

    setProfileStatus = () => {
        this.setState({
            profileStatus: true,
        }) 
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
        
        // HIT API
        this.setState({
            data: {
                ...this.state.data,
                firstName: "Jhon",
                lastName: "Doe",
                email: "johndoe@gmail.com",
                telephone: "081234567890",
                instagram: "@johndoe",
                date:"01",
                month:"01",
                year: "2002",
                gender: "laki",
                contentType: ["Fashion", "Lifestyle"],
                story: [{price: "", item: ""}],
                feeds: [{price: "", item: ""}],
                reels: [{price: "", item: ""}],
            }
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
        const type = this.state.screenWidth < 1200 ? "mobile" : "desktop"

        return (
            <>
                <Header type={type} content="influencer" className='has-shadow' fullName={data.firstName+' '+data.lastName} collapse={collapseStatus => this.setState({ collapse: collapseStatus})}/>
                <div className="container">
                    <div className="row">
                        {
                            (type === "mobile") ? (
                                <div className={`${this.state.collapse === true ? 'visible' : 'invisible d-none'}`}>
                                    <div className="menu-container pt-5 mt-5">
                                        <div className="menu-overlay" style={{ zIndex: "5" }}>
                                            <ul className="navbar-collapse navbar-nav mb-2">
                                                <li className='nav-item align-items-center'>
                                                    <Button className="button-username fw-bold text-decoration-none border-0 text-center w-100 py-2 px-4"
                                                            type="button"
                                                            isRounded
                                                            isPrimary
                                                    >
                                                        { data.firstName+' '+data.lastName }
                                                    </Button>
                                                </li>
                                                <li className="nav-item align-items-center">
                                                    <Button className="btn btn-link text-decoration-none px-0 w-100 float-start"
                                                            // style={{ marginTop: "-0.5rem"}}
                                                            type="link"
                                                            href="/influencer"
                                                    >
                                                        {"Profile"}
                                                    </Button>
                                                </li>
                                                <li className="nav-item align-items-center">
                                                    <Button className="btn btn-link text-decoration-none px-0 w-100 text-gray float-start"
                                                            // style={{ marginTop: "-0.5rem"}}
                                                            type="link"
                                                            href="/influncer/notifikasi"
                                                    >
                                                        {"Notifikasi"}
                                                    </Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-xl-2 position-fixed pt-5 mt-5">
                                    <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white mt-4">
                                        <li className='nav-item'>
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="menu-active"></div>
                                                </div>
                                                <div className="col-10 text-primary">
                                                    <Button className="btn btn-link text-decoration-none px-0 text-justify float-start"
                                                            // style={{ marginTop: "-0.5rem"}}
                                                            type="link"
                                                            href="/influencer"
                                                    >
                                                        {"Profile"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='nav-item'>
                                            <div className="row">
                                                <div className="col-2">
                                                    {/* <div className="menu-active"></div> */}
                                                </div>
                                                <div className="col-10 text-primary">
                                                    <Button className="btn btn-link text-decoration-none px-0 text-justify float-start text-gray"
                                                            // style={{ marginTop: "-0.5rem"}}
                                                            type="link"
                                                            href="/influncer/notifikasi"
                                                    >
                                                        {"Notifikasi"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            )
                        }
                        
                        
                        {
                            (this.state.profileStatus === false) ? (
                                <div className={`col-xl-8 col-12 ${type !== 'mobile' ? 'offset-3' : ''}`}>
                                    <div className="row align-items-center" style={{height: "90vh"}}>
                                        <div className="col-sm-12 col-md-12 col-lg-10">
                                            <p className="text-white fs-4" style={{ marginBottom: "0"}}>Halo, Kak {data.firstName},</p>
                                            <h2 className="text-white fs-2 fw-bold">Selamat, akun kamu berhasil diaktifkan!</h2>
                                            <p className="text-gray text-justify fs-5 mt-4 mb-4 pb-3">
                                                Selamat ya, akun kamu udah berhasil diaktifkan. Yuk, lengkapi profil kamu supaya akun kamu dapat ditampilkan.
                                            </p>

                                            <Button className="button-username fw-bold text-decoration-none border-0 text-center py-2 px-4"
                                                type="buton"
                                                onClick={this.setProfileStatus}
                                                isPrimary
                                                isRounded
                                            >
                                                Lengkapi Profile
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`col-xl-6 col-12 ${type !== 'mobile' ? 'offset-3' : ''} `}>
                                    <div className={`${type === 'mobile' && this.state.collapse === true ? 'd-none' : 'visible'}`}>
                                        <div className="row" style={{marginTop:"8rem"}}>
                                            <div className="col-12">
                                                <div className="d-flex align-items-center">
                                                    <div className="text-white fw-bold" style={ type === "mobile" ? {  width: "7rem" } :  {  width: "5.5rem" }}>
                                                        Foto Profil
                                                    </div>
                                                    <div className="line-100"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <div className="row">
                                                    <div className="col-5 col-xl-4">
                                                        <div className="bg-secondary rounded-3" style={{width: "8.5rem", height: "8.5rem"}}>
                                                                <img src="http://placeimg.com/640/480/fashion" style={{ width:"100%", height:"100%", backgroundSize:"contain"}} className='rounded-3' alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-7 col-xl-8">
                                                        <div className="row align-items-center h-100">
                                                            <div className="col-12">
                                                                <File name="photo" fileObject={fileObject => this.setState({ data: {...this.state.data , photo: fileObject }})}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginTop:"3rem"}}>
                                            <div className="col-12">
                                                <div className="d-flex align-items-center">
                                                    <div className="text-white fw-bold" style={ type === "mobile" ? {  width: "7rem" } :  {  width: "5.5rem" }}>
                                                        Info Dasar
                                                    </div>
                                                    <div className="line-100"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <div className="row">
                                                    <div className="w-50 pe-2">
                                                        {/* <Fade delay={900}> */}
                                                            <Input name="firstName" 
                                                                inputClassName="text-white"
                                                                value={data.firstName} 
                                                                onChange={this.onChange}
                                                                placeholder="Nama Depan"/>
                                                        {/* </Fade> */}
                                                    </div>
                                                    <div className="w-50 ps-2">
                                                        {/* <Fade delay={900}> */}
                                                            <Input  name="lastName" 
                                                                    inputClassName="text-white"
                                                                    value={data.lastName} 
                                                                    onChange={this.onChange}
                                                                    placeholder="Nama Belakang"/>
                                                        {/* </Fade> */}
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    {/* <Fade delay={900}>  */}
                                                        <Input  type="email"
                                                                name="email" 
                                                                inputClassName="text-white"
                                                                value={data.email} 
                                                                onChange={this.onChange}
                                                                placeholder="Email"
                                                                errorResponse='Mohon isi dengan format email..'/>
                                                    {/* </Fade> */}
                                                </div>

                                                <div className="col-12">
                                                    {/* <Fade delay={900}> */}
                                                        <Input  type="number"
                                                                name="telephone"
                                                                inputClassName="text-white"
                                                                value={data.telephone} 
                                                                onChange={this.onChange}
                                                                placeholder="Nomor Telephone"
                                                                errorResponse='Mohon isi dengan format angka..'/>
                                                    {/* </Fade> */}
                                                </div>

                                                <div className="row">
                                                    <div className="w-50 pe-2">
                                                        {/* <Fade delay={900}> */}
                                                            <Input  type="text"
                                                                    name="kota"
                                                                    inputClassName="text-white"
                                                                    value={data.kota} 
                                                                    onChange={this.onChange}
                                                                    placeholder="Kota/Kabupaten"/>
                                                        {/* </Fade> */}
                                                    </div>
                                                    <div className="w-50 ps-2">
                                                        {/* <Fade delay={900}> */}
                                                            <Input  type="text"
                                                                    name="provinsi"
                                                                    inputClassName="text-white"
                                                                    value={data.provinsi} 
                                                                    onChange={this.onChange}
                                                                    placeholder="Provinsi"/>
                                                        {/* </Fade> */}
                                                    </div>
                                                </div>

                                                <div className="row" style={{ position:"relative",zIndex: "2",}}>
                                                    <div className={`${type === 'mobile' ? 'col-12':'w-50 pe-2'}`}>
                                                        <div className="row">
                                                            {/* <Fade delay={900}> */}
                                                                <label htmlFor="" className="label mb-1">Tanggal Lahir</label>
                                                                <div className="col-3 pe-1">
                                                                    <Input  type="number"
                                                                            name="date"
                                                                            inputClassName="text-white"
                                                                            value={data.date} 
                                                                            onChange={this.onChange}
                                                                            range="1,31"
                                                                            placeholder="DD"
                                                                            errorResponse='isi dengan angka!'/>
                                                                </div>
                                                            {/* </Fade> */}
                                                            <div className="col-3 ps-1 pe-1">
                                                                {/* <Fade delay={900}> */}
                                                                    <Input  type="number"
                                                                            name="month"
                                                                            inputClassName="text-white"
                                                                            value={data.month} 
                                                                            onChange={this.onChange}
                                                                            placeholder="MM"
                                                                            range="1,12"
                                                                            errorResponse='isi dengan angka!'/>
                                                                {/* </Fade> */}
                                                            </div>
                                                            <div className="col-6 ps-1">
                                                                {/* <Fade delay={900}> */}
                                                                    <Input  type="number"
                                                                            name="year"
                                                                            inputClassName="text-white"
                                                                            value={data.year} 
                                                                            onChange={this.onChange}
                                                                            placeholder="YYYY"
                                                                            range="1945,2021"
                                                                            errorResponse='isi dengan angka!'/>
                                                                {/* </Fade> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`${type === 'mobile' ? 'col-12':'w-50 ps-2'}`}>
                                                        {/* <Fade delay={900}> */}
                                                            <Select name="gender"
                                                                    value={data.gender}
                                                                    className="text-white"
                                                                    labelName="Jenis Kelamin" 
                                                                    placeHolder='Jenis Kelamin'
                                                                    onClick={this.onChange}
                                                                // isLoading
                                                                >
                                                                <option value="laki">Laki-laki</option>
                                                                <option value="perempuan">Perempuan</option>
                                                            </Select>
                                                        {/* </Fade> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <label htmlFor="" className="label mb-1">Instagram</label>
                                                    {/* <Fade delay={900}>  */}
                                                        <Input  type="text"
                                                                name="instagram"
                                                                inputClassName="text-white"
                                                                value={data.instagram} 
                                                                onChange={this.onChange}
                                                                placeholder="Instagram"/>
                                                    {/* </Fade> */}
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="" className="label mb-1">Tipe Konten</label>
                                                    {/* <Fade delay={900}>  */}
                                                        <Tags name="contentType"
                                                                tags={data.contentType}
                                                                tagsClassName="text-white"
                                                                tagsUpdated={tagsData => this.setState({ data: { ...data, contentType: tagsData}})}
                                                                placeholder="Tipe Konten"
                                                        />
                                                    {/* </Fade> */}
                                            </div>

                                        </div>

                                        <div className="row" style={{marginTop:"4rem", marginBottom: "5rem"}}>
                                            <div className="col-12">
                                                <div className="d-flex align-items-center">
                                                    <div className="text-white fw-bold" style={ type === "mobile" ? {  width: "7rem" } :  {  width: "5.5rem" }}>
                                                        Rate Card
                                                    </div>
                                                    <div className="line-100"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <label htmlFor="" className="label mb-1 text-white fw-bold">Story</label>
                                                {
                                                    data.story.map((element, index) => (
                                                        <div className="d-flex align-items-center" key={index}>
                                                            <div className="w-50">
                                                                <Input  name="price"
                                                                        inputClassName="text-white"
                                                                        value={element.price || ""} 
                                                                        onChange={e => this.storyOnChange(index, e)}
                                                                        placeholder="Harga"/>
                                                            </div>
                                                            <div className="w-auto text-gray m-2 pb-3">Per</div>
                                                            <div className="w-50" style={{ zIndex: `${3000-index}`}}>
                                                                <Select name="item"
                                                                        className="text-white"
                                                                        value={element.item || ""}
                                                                        placeHolder='Post/Item/Story'
                                                                        onClick={e => this.storyOnChange(index, e)}
                                                                    // isLoading
                                                                    >
                                                                    <option value="post">Post</option>
                                                                    <option value="item">Item</option>
                                                                    <option value="story">Story</option>
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <Button className="btn btn-link text-decoration-none p-0" type="button" onClick={this.addRateCardStory }>
                                                    <img src={IconPlus} className="m-0 me-2" width="24" height="24" alt="plus-icon" /> Tambah Option
                                                </Button>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <label htmlFor="" className="label mb-1 text-white fw-bold">Feeds</label>
                                                {
                                                    data.feeds.map((element, index) => (
                                                        <div className="d-flex align-items-center" key={index}>
                                                            <div className="w-50">
                                                                <Input  name="price"
                                                                        inputClassName="text-white"
                                                                        value={element.price || ""} 
                                                                        onChange={e => this.feedsOnChange(index, e)}
                                                                        placeholder="Harga"/>
                                                            </div>
                                                            <div className="w-auto text-gray m-2 pb-3">Per</div>
                                                            <div className="w-50" style={{ zIndex: `${2000-index}`}}>
                                                                <Select name="item"
                                                                        className="text-white"
                                                                        value={element.item || ""}
                                                                        placeHolder='Post/Item/Story'
                                                                        onClick={e => this.feedsOnChange(index, e)}
                                                                    // isLoading
                                                                    >
                                                                    <option value="post">Post</option>
                                                                    <option value="item">Item</option>
                                                                    <option value="story">Story</option>
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                
                                                <Button className="btn btn-link text-decoration-none p-0" type="button" onClick={this.addRateCardFeeds }>
                                                    <img src={IconPlus} className="m-0 me-2" width="24" height="24" alt="plus-icon" /> Tambah Option
                                                </Button>
                                            </div>
                                            <div className="col-12 mt-4 mb-5" style={{marginBottom:"5rem"}}>
                                                <label htmlFor="" className="label mb-1 text-white fw-bold">Reels</label>
                                                {
                                                    data.reels.map((element, index) => (
                                                        <div className="d-flex align-items-center" key={index}>
                                                            <div className="w-50">
                                                                <Input  name="price"
                                                                        inputClassName="text-white" 
                                                                        value={element.price || ""} 
                                                                        onChange={e => this.reelsOnChange(index, e)}
                                                                        placeholder="Harga"/>
                                                            </div>
                                                            <div className="w-auto text-gray m-2 pb-3">Per</div>
                                                            <div className="w-50" style={{ zIndex: `${1000-index}`}}>
                                                                <Select name="item"
                                                                        className="text-white"
                                                                        value={element.item || ""}
                                                                        placeHolder='Post/Item/Story'
                                                                        onClick={e => this.reelsOnChange(index, e)}
                                                                    // isLoading
                                                                    >
                                                                    <option value="post">Post</option>
                                                                    <option value="item">Item</option>
                                                                    <option value="story">Story</option>
                                                                </Select>
                                                            </div>
                                                        </div>

                                                    ))
                                                }
                                                <Button className="btn btn-link text-decoration-none p-0" type="button" style={{ marginBottom:"3rem"}} onClick={this.addRateCardReels}>
                                                    <img src={IconPlus} className="m-0 me-2" width="24" height="24" alt="plus-icon" /> Tambah Option
                                                </Button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                            
                    </div>

                    <Footer style={{ zIndex: "9999"}} />
                </div>
            </>
        )
    }
}
