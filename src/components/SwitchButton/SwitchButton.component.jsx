import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          offColor="#000000"
          onColor="#F2F2F2"
          className="react-switch"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "#FFFF",
                paddingRight: 2,
              }}
            >
              <FontAwesomeIcon icon={faMoon} />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2,
              }}
            >
              <FontAwesomeIcon icon={faSun} />
            </div>
          }
        />
      </SwitchContainer>
    </>
  );
};

export default SwitchButton;
