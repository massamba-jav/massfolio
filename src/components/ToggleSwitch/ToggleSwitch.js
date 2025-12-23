import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(prev => !prev);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? "🌜" : "☀️"}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;