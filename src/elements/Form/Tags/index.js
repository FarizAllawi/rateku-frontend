import React, {useState} from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Tags(props) {

    const {
        name,
        tags,
        placeholder,
        tagsClassName
    } = props

    const [input, setInput] = useState('')
    const [tagsValue, setTags] = useState(tags)
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if ((key === ',' || key === "Enter") && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !input.length && tagsValue.length && isKeyReleased) {
            e.preventDefault();
            const tagsCopy = [...tagsValue];
            const poppedTag = tagsCopy.pop();
        
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        props.tagsUpdated(tagsValue)
        setIsKeyReleased(false);
    }

    const onKeyUp = (e) => {
        setIsKeyReleased(true)
        props.tagsUpdated(tagsValue)
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
        props.tagsUpdated(tagsValue)
    }

    const deleteTag = (index) => {
        const tagsTemp = tagsValue.filter((tag, i) => i !== index)
        setTags(tagsTemp)
        props.tagsUpdated(tagsTemp)
    }

    

    return (
        <div className="tags mb-3">
            {tagsValue.map((tag, index) => (
                <div className="tag text-primary" key={index}>
                    {tag}
                    <button onClick={() => deleteTag(index)}>x</button>
                </div>
            ))}
            <div className="tags-group">    
                <input  name={name}
                        value={input}
                        className={['form-control rounded-3 py-2 px-3', tagsClassName].join(" ")}
                        placeholder={placeholder}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onChange={onChange}
                />
            </div>
        </div>
    )
}

Tags.propTypes = {
    name: propTypes.string.isRequired,
    tags: propTypes.array.isRequired,
    suggestion:propTypes.array,
    placeholder: propTypes.string,
    tagsClassName: propTypes.string,
}
