import React from 'react'
import Button from 'elements/Button'
import propTypes from 'prop-types'

export default function File(props) {

    const {
        name,
    } = props

    const hiddenFileInput = React.useRef(null)

    const onClick = (event) => {
        hiddenFileInput.current.click()
    }

    const onChange = (event) => {
        const fileUploaded = event.target.files[0];
        props.fileObject(fileUploaded);
    }

    return (
        <>
            <Button className="button-username fw-bold text-decoration-none border-0 text-center py-2 px-4"
                    type="buton"
                    onClick={onClick}
                    isPrimary
                    isRounded>
                Unggah Gambar
            </Button>
            <input  type="file"
                    name={name}
                    ref={hiddenFileInput}
                    onChange={onChange}
                    style={{display:'none'}} /> 
        </>
    )
}

File.defaultProps = {
    value: "",
    fileObject: {}
}

File.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
}
