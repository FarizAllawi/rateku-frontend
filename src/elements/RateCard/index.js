import React, {useState} from 'react'

import Button from 'elements/Button'
import FemaleIcon from 'assets/images/gender-female-icon.svg'
import InstagramIcon from 'assets/images/instagram-icon.svg'
import SaveIcon from 'assets/images/save-icon.svg'
import './index.scss'

export default function RateCard({item}) {

    const [screenWidth] = useState(window.innerWidth)
    const type = screenWidth < 500 ? "mobile" : "desktop"
    
    const onClick = (event) => {

    }

    const onSave = (event) => {

    }

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + ' K ' : Math.sign(num)*Math.abs(num)
    }


    return (
        <div className="rate-card w-100">
            
            <div className="image-container">
                <div className="image-card">
                    <img src={item.profilePic} alt={`${item.firstName}-${item.lastName}`} />
                </div>
            </div>
            <div className='content-container'>
                <p className="text-name fw-bold mt-2 mb-0 text-white">{item.firstName} {item.lastName} <span><img src={FemaleIcon} className={type === 'mobile' ?  'ms-2' : 'ms-2 mb-1' } width={type === 'mobile' ? '10': '13'} height={type === 'mobile' ? '10': '13'} alt='icon-gender-female'/></span></p>
                <p className="text-gray mb-0 text-location">{item.city}, {item.country}</p>
                <div className="row" style={type === 'mobile' ?  {marginTop: '.5rem',  paddingLeft: ".6rem"} : {marginTop: '1rem',  paddingLeft: ".6rem"}}>
                    {
                        item.contentType?.map((content,index) =>{
                            return <div className="w-auto content-type text-gray" key={index}>
                                        {content}
                                    </div>
                        })
                    }
                </div>
                <p className="mb-0 text-gray " style={type === "mobile" ?  { marginTop:".5rem", fontSize: "6pt"} : { marginTop:"1rem",fontSize: "10pt"}}><span><img src={InstagramIcon} className={type === 'mobile' ? 'me-1' : 'me-2'} width={type === 'mobile' ? '10': '14'} height={type === 'mobile' ? '10': '14'} alt='icon-instagram'/>@{item.instagram}</span></p>
                <p className="text-gray mb-0" style={type === "mobile" ?  { fontSize: "6pt"} : { fontSize: "10pt"}}><span>{kFormatter(item.followers)} | ER {item.er}</span></p>
            </div>
            
            <div className="w-100 action-card px-3 py-3">
                <div className="row">

                    <div className="w-25">
                        <img src={SaveIcon} className='button-save' style={{cursor:"pointer"}} onClick={onSave} alt='button-save'/>
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