import { useState } from "react";
import propTypes from 'prop-types'
import {
    animated,
    useSpring,
    config,
    useSpringRef,
    useChain
} from "react-spring";
import "./index.scss";

export default function Checkbox(props) {
  const {
    labelName,
    value,
    name
  } = props


  const [isChecked, setIsChecked] = useState(false);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#C3EBE2" : "rgba(196, 196, 196, 0.38)",
    borderColor: isChecked ? "#C3EBE2" : "#C4C4C4",
    config: config.gentle,
    ref: checkboxAnimationRef
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  const onChange = (event) => {
    setIsChecked(!isChecked)
    props.checked(!isChecked)
  }

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#11253F"
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
      <span className="ms-3">{labelName}</span>
    </label>
  );
}

Checkbox.defaultProps = {
  value:"",
  labelName: "Check Box"
}

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  labelName: propTypes.string.isRequired,
  // checked: propTypes.func.isRequired,
}