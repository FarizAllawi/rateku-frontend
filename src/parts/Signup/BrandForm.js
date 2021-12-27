import React from 'react'
import Fade from 'react-reveal/Fade'

import Input from "elements/Form/Input"
import Select from 'elements/Form/Select'
import 'assets/scss/style.scss'

export default function BrandForm(props) {
    return (
        <div className="padding-page container px-4">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div className="col-12">
                    <Fade delay={900}>
                        <Input  name="companyName" 
                                value={props.data.companyName} 
                                onChange={props.onChange}
                                placeholder="Nama Perusahaan"/>
                    </Fade>
                </div>
                <div className="row" style={{position:"relative", zIndex:"2"}}>
                    <div className="col-md-12 col-lg-12 col-xl-6">
                        <Fade delay={900}>
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
                        </Fade>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-6">
                        <Fade delay={900}>
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
                        </Fade>
                    </div>
                </div>
                <div className="col-12">
                    <Fade delay={900}>
                        <Input  name="location" 
                                value={props.data.location} 
                                onChange={props.onChange}
                                placeholder="Lokasi"/>
                    </Fade>
                </div>
                <div className="col-12">
                    <Fade delay={900}>
                        <Input  name="instagram" 
                                value={props.data.instagram} 
                                onChange={props.onChange}
                                placeholder="Instagram Perusahaan"/>
                    </Fade>
                </div>

                <div className="col-12 mt-4 mb-4">
                    <Fade delay={900}>
                        <div className="line-100"></div>
                    </Fade>
                </div>

                <div className="row" style={{position:"relative", zIndex:"2"}}>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <Fade delay={900}>
                            <Select name="knowRateku"
                                    value={props.data.knowRateku}
                                    labelName="Darimana kamu tahu Rateku?" 
                                    placeHolder='Pilih disini'
                                    onClick={props.onChange}
                                // isLoading
                                >
                                <option value="laki">Selebgram/Influencers/KOL</option>
                                <option value="laki">Media Sosial</option>
                                <option value="laki">Teman/Keluarga/Guru/Dosen</option>
                                <option value="laki">Iklan</option>
                                <option value="laki">Artikel/Blog/Publikasi</option>
                                <option value="laki">Search Engine (Google) </option>
                                <option value="laki">Lainnya</option>
                            </Select>
                        </Fade>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <Fade delay={900}>
                            <Input  name="referalCode" 
                                    value={props.data.referalCode} 
                                    onChange={props.onChange}
                                    labelName="Punya kode referral"
                                    placeholder="Masukan kode referral (Opsional)"/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}
