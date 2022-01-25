import React from 'react'
// import Fade from 'react-reveal/Fade'

export default function CompleteInfluencer(props) {
    return (
        <div className="mb-5">
            <div className="col-12 col-lg-12 col-xl-5 pb-3">
                {/* <Fade delay={900}> */}
                    <p className="text-completed fs-6">Untuk menjaga kenyamanan antar pengguna, formulir pendaftaran kamu
                        akan kami tinjau sebelum nantinya akun kamu diaktifkan. <strong>
                        Ini biasanya memakan waktu <u>kurang dari 1 hari kerja.</u>
                        </strong>
                    </p>

                    <p className="text-completed fs-6">Kami akan menghubungi kamu melalui kontak yang sudah kamu cantumkan
                        sebelumnya.
                    </p>

                    <p className="text-completed fs-6">Terima kasih sudah bergabung bersama Rateku!</p>
                {/* </Fade> */}
            </div>
        </div>
    )
}
