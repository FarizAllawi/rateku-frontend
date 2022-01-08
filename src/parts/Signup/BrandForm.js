import React, {useState, useEffect} from 'react'
// import Fade from 'react-reveal/Fade'

import Input from "elements/Form/Input"
import Select from 'elements/Form/Select'
import 'assets/scss/style.scss'

export default function BrandForm(props) {
    const [type, setType] = useState('desktop')

    useEffect(() => {
        // Detect virtual keyboard on mobile screen
        window.addEventListener("resize", updateWindowDimensions.bind());
        return () => {
            window.removeEventListener("resize", updateWindowDimensions.bind());
        };
    })

    function updateWindowDimensions() {
        if (window.innerWidth < 768) {
            setType(() => 'mobile' )
        } else {
            setType(() => 'desktop' )
        }

    }
    return (
        <div className="padding-page container px-4">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div className="col-12">
                    {/* <Fade delay={900}> */}
                        <Input  name="companyName" 
                                value={props.data.companyName} 
                                onChange={props.onChange}
                                placeholder="Nama Perusahaan"/>
                    {/* </Fade> */}
                </div>
                <div className="row" style={{position:"relative", zIndex:"3"}}>
                    <div className={`${type === 'mobile' ? 'col-12':'w-50 pe-2'}`} style={{position:"relative", zIndex:"4"}}>
                        {/* <Fade delay={900}> */}
                            <Select name="companyType"
                                    value={props.data.companyType}
                                    placeHolder='Tipe Perusahaan'
                                    onClick={props.onChange}
                                // isLoading
                                >
                                <option value="laki">Brand</option>
                                <option value="laki">Agensi</option>
                                <option value="laki">Komunitas</option>
                            </Select>
                        {/* </Fade> */}
                    </div>
                    <div className={`${type === 'mobile' ? 'col-12':'w-50 ps-2'}`}>
                        {/* <Fade delay={900}> */}
                            <Select name="companySize"
                                    value={props.data.companySize}
                                    placeHolder='Ukuran Perusahaan'
                                    onClick={props.onChange}
                                // isLoading
                                >
                                <option value="laki">1 - 10 Karyawan</option>
                                <option value="laki">11 - 50 Karyawan</option>
                                <option value="laki">51 - 200 Karyawan</option>
                                <option value="laki">201 - 1000 Karyawan</option>
                                <option value="laki">1000+ Karyawan</option>
                            </Select>
                        {/* </Fade> */}
                    </div>
                </div>
                <div className="col-12">
                    {/* <Fade delay={900}> */}
                        <Input  name="location" 
                                value={props.data.location} 
                                onChange={props.onChange}
                                placeholder="Lokasi"/>
                    {/* </Fade> */}
                </div>
                <div className="col-12">
                    {/* <Fade delay={900}> */}
                        <Input  name="instagram" 
                                value={props.data.instagram} 
                                onChange={props.onChange}
                                placeholder="Instagram Perusahaan"/>
                    {/* </Fade> */}
                </div>

                <div className="col-12 mt-4 mb-4">
                    {/* <Fade delay={900}> */}
                        <div className="line-100"></div>
                    {/* </Fade> */}
                </div>

                <div className="row" style={{position:"relative", zIndex:"2"}}>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6" style={{position:"relative", zIndex:"3"}}>
                        {/* <Fade delay={900}> */}
                            <Select name="knowRateku"
                                    value={props.data.knowRateku}
                                    labelName="Darimana kamu tahu Rateku?" 
                                    placeHolder='Pilih disini'
                                    onClick={props.onChange}
                                // isLoading
                                >
                                <option value="Selebgram/Influencers/KOL">Selebgram/Influencers/KOL</option>
                                <option value="Media Sosial">Media Sosial</option>
                                <option value="Teman/Keluarga/Guru/Dosen">Teman/Keluarga/Guru/Dosen</option>
                                <option value="Iklan">Iklan</option>
                                <option value="Artikel/Blog/Publikasi">Artikel/Blog/Publikasi</option>
                                <option value="Search Engine (Google)">Search Engine (Google)</option>
                                <option value="Lainnya">Lainnya</option>
                            </Select>
                        {/* </Fade> */}
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        {/* <Fade delay={900}> */}
                            <Input  name="referalCode" 
                                    value={props.data.referalCode} 
                                    onChange={props.onChange}
                                    labelName="Punya kode referral"
                                    placeholder="Masukan kode referral (Opsional)"/>
                        {/* </Fade> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
