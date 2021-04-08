import React, { useState } from "react";
import Switch from "react-switch";
import { SwitchContainer } from "./SwitchButton.style";

const SwitchButton = ({ themeState }) => {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = themeState;
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    changeTheme();
  };

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <>
      <SwitchContainer>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </SwitchContainer>
    </>
  );
};

export default SwitchButton;
