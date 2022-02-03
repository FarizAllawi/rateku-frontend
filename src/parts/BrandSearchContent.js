import React, {useState} from 'react';
import RateCard from 'elements/RateCard'

export default function BrandSearchContent(props) {

    const {
        dataRateCard,
        collapseStatus
    } = props

    const [screenWidth] = useState(window.innerWidth)
    const type = screenWidth < 1200 ? "mobile" : "desktop"
    let currentUrl = window.location.href 
    currentUrl = currentUrl.split('/')
    currentUrl = currentUrl[5]


    return <div className={`col-xl-10 col-12 ${type !== 'mobile' ? 'offset-2  ps-5' : ''}`}>
                <div className={`${type === 'mobile' && collapseStatus === true ? 'd-none' : 'visible'} ${type !== 'mobile' ? 'ps-5' : ''}`}>
                    {
                        (type === 'desktop') ? (
                            <p className={`${type !== 'mobile' ? 'h5' : 'h6'}  text-white `} style={{marginTop:"7.25rem"}}>Hasil pencarian influencers yang sesuai untuk tipe konten { currentUrl }</p>
                        ) : (
                            <div style={{marginTop:"9rem"}}></div>    
                        )
                    }   
                    <div className="row mt-4 py-0 pt-1">
                        {
                                dataRateCard?.map((item, index) => {
                                    return <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3  col-xxl-3 mb-4" key={index}>
                                        <RateCard item={item}/>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>;
    }
