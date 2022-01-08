import React from 'react'

import Button from 'elements/Button'
import FemaleIcon from 'assets/images/gender-female-icon.svg'
import InstagramIcon from 'assets/images/instagram-icon.svg'
import SaveIcon from 'assets/images/save-icon.svg'
import './index.scss'

export default function RateCard({item}) {
    
    const onClick = (event) => {

    }

    const onSave = (event) => {

    }

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + ' K ' : Math.sign(num)*Math.abs(num)
    }


    return (
        <div className="rate-card w-100">
            <div className='px-3 py-3'>
                <div className="image-card">
                    <img src={item.profilePic} alt={`${item.firstName}-${item.lastName}`} />
                </div>
                <p className="fs-6 fw-bold mt-2 mb-0 text-white">{item.firstName} {item.lastName} <span><img src={FemaleIcon} className='ms-2 mb-1' width="13" height="13" alt='icon-gender-female'/></span></p>
                <p className="text-gray mb-0" style={{ fontSize: "10pt"}}>{item.city}, {item.country}</p>
                <div className="row px-2 mt-3">
                    {
                        item.contentType?.map((content,index) =>{
                            return <div className="w-auto content-type text-gray" key={index}>
                                        {content}
                                    </div>
                        })
                    }
                </div>
                <p className="mt-3 mb-0 text-gray" style={{ fontSize: "10pt"}}><span><img src={InstagramIcon} className='me-2' width="14" height="14" alt='icon-instagram'/>@{item.instagram}</span></p>
                <p className="text-gray mb-0" style={{ fontSize: "10pt"}}><span>{kFormatter(item.followers)} | ER {item.er}</span></p>
            </div>
            
            <div className="w-100 action-card px-3 py-3">
                <div className="row">

                    <div className="w-25">
                        <img src={SaveIcon} className='button-save ms-3' style={{cursor:"pointer"}} width="14" height="18" onClick={onSave} alt='button-save'/>
                    </div>
                    <div className="w-75 ">
                        <Button className="button-ratecard float-end fw-bold text-decoration-none border-0 text-center"
                            type="buton"
                            onClick={onClick}
                            isPrimary
                            isRounded
                        >
                            Tanya Rate Card
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}