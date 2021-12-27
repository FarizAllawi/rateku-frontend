import React from 'react'
// import Fade from 'react-reveal/Fade'

export default function CompleteInfluencer(props) {
    return (
        <div className="padding-page container px-4 mb-5">
            <div className="col-12 col-lg-12 col-xl-6 pb-3">
                {/* <Fade delay={900}> */}
                    <p className="text-completed">Untuk menjaga kenyamanan antar pengguna, formulir pendaftaran kamu
                        akan kami tinjau sebelum nantinya akun kamu diaktifkan. <strong>
                        Ini biasanya memakan waktu <u>kurang dari 1 hari kerja.</u>
                        </strong>
                    </p>

                    <p className="text-completed">Kami akan menghubungi kamu melalui kontak yang sudah kamu cantumkan
                        sebelumnya.
                    </p>

                    <p className="text-completed">Terima kasih sudah bergabung bersama Rateku!</p>
                {/* </Fade> */}
            </div>
        </div>
    )
}
