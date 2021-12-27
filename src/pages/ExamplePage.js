import React, {Component} from 'react'
import Select from 'elements/Form/Select'
import Input from 'elements/Form/Input'
import useForm from 'helpers/hooks/useForm'

export default function Example() {
   
    const [state, setState, newState] = useForm({
        text:"", email:"", gender: "", number: "", toggle: "",
    });

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center"
                    style={{height: "100vh"}}
            >
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    
                </div>


                {/* <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    <Input
                        type="text"
                        name="text"
                        value={state.text}
                        onChange={setState}
                        labelName="Input Text"
                        placeholder="Input Text"
                        errorResponse='Mohon isi dengan format email yang benar..'
                    />
                </div> */}
                
                {/* <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    <Input
                        type="number"
                        name="number"
                        value={state.number}
                        onChange={setState}
                        placeholder="Input Number"
                        errorResponse='Mohon isi dengan format angka benar..'
                    />
                </div> */}

                {/* <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    <Select name="gender"
                            value={state.gender}
                            labelName="Jenis Kelamin" 
                            placeHolder='Jenis Kelamin'
                            onClick={setState}
                            // isLoading
                    >
                        <option value="laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </Select>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    <Input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={setState}
                        placeholder="Input Email"
                        errorResponse='Mohon isi dengan format email yang benar..'
                    />
                </div> */}
            </div>
        </div>
    )

}
