import React, {Children, useState, useRef, useEffect} from 'react'
import propTypes from 'prop-types'
import { ReactComponent as Arrow } from 'assets/images/arrow-down.svg'
import "./index.scss"

export default function Select({
    labelName,
    id,
    name,
    value,
    className,
    children,
    onClick,
    placeHolder,
    isDisabled,
    isLoading
}) {
    
    // const class_name = [className]
    const [toggle, setToggle] = useState( () => false)
    const selectWrapper = useRef(null)
    
    const items = Children.toArray(children)

    function toggleSelect() {
        setToggle( () => !toggle)
    }

    function clickOutside(event) {
        if (selectWrapper && !selectWrapper.current.contains(event.target)) {
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickOutside)
        return () => {
            window.removeEventListener("mousedown", clickOutside)
        }
    }, [])

    const selected = items.find((item) => item.props.value === value)

    return (
        <div className="select mb-3">
            { labelName && (
                <label htmlFor="" className="label mb-1">{labelName}</label>
            )}
            
            <div className={`${toggle ? 'select-group-active' : 'select-group'} w-auto `} ref={selectWrapper} onClick={toggleSelect}>
                <div className="form-control rounded-3 px-3" >
                    <div className="d-flex align-items-center mt-1">
                        <span className={`col ${ selected ? 'text-white' : ''}`}>{selected?.props.children ?? placeHolder}</span>
                        { 
                            (isLoading) ? (
                                <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                            ) : (
                                (isDisabled) ? ( <Arrow className="arrow"/> ) : (
                                    toggle ?  <Arrow className="arrow active" /> : <Arrow className="arrow"/> 
                                )
                            )  
                        }
                    </div>
                </div>
            
                {
                    (isDisabled || isLoading) ? '' :  (
                        <ul className={["option-group  rounded-3 w-auto mt-2 start-0 end-0", toggle ? "" : "visually-hidden"].join(" ")}>
                        { 
                            items.map((item , index) => {
                                return <li key={index} className="option rounded-3 w-auto py-2 px-3 " onClick={() => onClick({ target:{ name: name, value: item.props.value}})}>
                                    {
                                        item.props.children  
                                    }
                                </li>
                            })
                        }
                        </ul>
                    )
                }
            </div>
        </div>
    ) 
}

Select.propTypes = {
    onClick: propTypes.func.isRequired,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    name: propTypes.string.isRequired,
    placeHolder: propTypes.string,
    id: propTypes.string,
    className: propTypes.string,
    labelName:propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
}
