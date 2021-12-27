import React from 'react'
// import Fade from 'react-reveal/Fade'

import Input from "elements/Form/Input"
import Select from 'elements/Form/Select'
import 'assets/scss/style.scss'

export default function SignUp(props) {
    return (
        <div className="padding-page container px-4">
            
                <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-6">
                            {/* <Fade delay={900}> */}
                                <Input name="firstName" 
                                    value={props.data.firstName} 
                                    onChange={props.onChange}
                                    placeholder="Nama Depan"/>
                            {/* </Fade> */}
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-6">
                            {/* <Fade delay={900}> */}
                                <Input name="lastName" 
                                    value={props.data.lastName} 
                                    onChange={props.onChange}
                                    placeholder="Nama Belakang"/>
                            {/* </Fade> */}
                        </div>
                    </div>

                    <div className="col-12">
                        {/* <Fade delay={900}>  */}
                            <Input  type="email"
                                    name="email" 
                                    value={props.data.email} 
                                    onChange={props.onChange}
                                    placeholder="Email"
                                    errorResponse='Mohon isi dengan format email..'/>
                        {/* </Fade> */}
                    </div>

                    <div className="col-12">
                        {/* <Fade delay={900}> */}
                            <Input  type="number"
                                    name="telephone" 
                                    value={props.data.telephone} 
                                    onChange={props.onChange}
                                    placeholder="Nomor Telephone"
                                    errorResponse='Mohon isi dengan format angka..'/>
                        {/* </Fade> */}
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-">
                            {/* <Fade delay={900}> */}
                                <Input  type="password"
                                        name="password" 
                                        value={props.data.password} 
                                        onChange={props.onChange}
                                        placeholder="Kata Sandi"/>
                            {/* </Fade> */}
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-">
                            {/* <Fade delay={900}> */}
                                <Input  type="password"
                                        name="passwordConf" 
                                        value={props.data.passwordConf} 
                                        onChange={props.onChange}
                                        placeholder="Konfirmasi Kata Sandi"/>
                            {/* </Fade> */}
                        </div>
                    </div>

                    <div className="row" style={{ position:"relative",zIndex: "2",}}>
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-">
                            <div className="row">
                                {/* <Fade delay={900}> */}
                                    <label htmlFor="" className="label mb-1">Tanggal Lahir</label>
                                    <div className="col-4">
                                        <Input  type="number"
                                                name="date" 
                                                value={props.data.date} 
                                                onChange={props.onChange}
                                                range="1,31"
                                                placeholder="DD"
                                                errorResponse='isi dengan angka!'/>
                                    </div>
                                {/* </Fade> */}
                                <div className="col-4">
                                    {/* <Fade delay={900}> */}
                                        <Input  type="number"
                                                name="month" 
                                                value={props.data.month} 
                                                onChange={props.onChange}
                                                placeholder="MM"
                                                range="1,12"
                                                errorResponse='isi dengan angka!'/>
                                    {/* </Fade> */}
                                </div>
                                <div className="col-4">
                                    {/* <Fade delay={900}> */}
                                        <Input  type="number"
                                                name="year" 
                                                value={props.data.year} 
                                                onChange={props.onChange}
                                                placeholder="YYYY"
                                                range="1945,2021"
                                                errorResponse='isi dengan angka!'/>
                                    {/* </Fade> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-">
                            {/* <Fade delay={900}> */}
                                <Select name="gender"
                                        value={props.data.gender}
                                        labelName="Jenis Kelamin" 
                                        placeHolder='Jenis Kelamin'
                                        onClick={props.onChange}
                                    // isLoading
                                    >
                                    <option value="laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </Select>
                            {/* </Fade> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}
