import React, { useState } from "react";
import { SubmenuContainer } from "./Menubar.style";
import { menubarData } from "./MenubarData";

const SubMenu = ({ openSubMenu }) => {
  const [childMenuOpen, setChildMenuOpen] = useState(false);
  return (
    <>
      <SubmenuContainer openSubMenu={openSubMenu}>
        {menubarData.map((data, idx) => (
          <>
            <p key={idx} onC>
              {data.name}
            </p>
          </>
        ))}
      </SubmenuContainer>
    </>
  );
};

export default SubMenu;
