import React, {Children} from 'react'
import propTypes from 'prop-types'
import "./index.scss"

export default function Switch(props) {

    const {
        value,
        defaultValue,
        name,
        className,
        labelName,
        children,
        onClick,
    } = props

    const class_name = [className]
    const items = Children.toArray(children)

    return <div className="switch mb-3">
        { labelName && (
            <label htmlFor="" className="label mb-1">{labelName}</label>
        )}
        
        <ul className={`switch-group ${class_name.join(" ")}`}>
        { 
            items.map((item , index) => {
                return <li key={index} className={`switch-option w-auto py-1 px-2 ${(((value) ? value : defaultValue) === item.props.value) ? 'switch-selected': ''}`} onClick={() => onClick({ target:{ name: name, value: item.props.value}})}>
                    {
                        item.props.children  
                    }
                </li>
            })
        }
        </ul>

    </div>
}

Switch.propTypes = {
    onClick: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.string , propTypes.number]).isRequired,
    defaultValue: propTypes.oneOfType([propTypes.string , propTypes.number]),
    className: propTypes.string,
    labelName:propTypes.string,
    isDisabled: propTypes.bool,
}
