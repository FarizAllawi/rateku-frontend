import React, {useState} from 'react'
import propTypes from 'prop-types'
import "./index.scss"

export default function Input(props) {

    const {
        value,
        type,
        placeholder,
        name,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse,
        labelName,
        range
    } = props

    const [HasError, setHasError] = useState(null)
    let pattern = ""
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (type === "number") pattern = "[0-9]*"

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value,
            }
        }
        
        if (type === "email") {
            if (!pattern.test(event.target.value)) setHasError(errorResponse)
            else setHasError(null)
        }

        if (type === "number") {
            if (!event.target.validity.valid) setHasError(errorResponse)
            else {
                props.onChange(target)
                setHasError(null)
            }
            
            if (range) {
                const rangeNumber = range.split(",")
                if (!(parseInt(event.target.value) >= parseInt(rangeNumber[0]) && parseInt(event.target.value) <= parseInt(rangeNumber[1]))) {
                    setHasError(`${rangeNumber[0]} - ${rangeNumber[1]}`)
                }
                else {
                    props.onChange(target)
                    setHasError(null)
                }
            }

        } else {
            props.onChange(target)
        }
    }

    return (
        <div className={["input mb-3", outerClassName].join(" ")}>
            {
                labelName && (
                    <label htmlFor="" className="label mb-1">{labelName}</label>
                )
            }
            <div className="input-group">
                {
                    prepend && (
                        <div className="input-group-prepend bg-gray-900">
                            <span className="input-group-text">{prepend}</span>
                        </div>
                    )
                }
                <input
                    name={name}
                    type={type !== "number" ? type : '' }
                    pattern={pattern}
                    className={['form-control rounded-3 py-2 px-3', inputClassName].join(" ")}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {
                    append && (
                        <div className="input-group-append bg-gray-900">
                            <span className="input-group text">{append}</span>
                        </div>
                    )
                }
            </div>
            { HasError && <span className='error-helper'>{HasError}</span>}
        </div>
    )
}

Input.defaultProps = {
    type: "text",
    pattern: "",
    value: "",
    placeholder: "Please type here...",
    errorResponse: "Please match the requested format.",
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.string , propTypes.number]).isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.string,
    placeholder: propTypes.string,
    labelName: propTypes.string,
    range: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string,
}
