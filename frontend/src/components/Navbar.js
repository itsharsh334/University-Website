import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Navitems";
import "./Navbar.css";
import { IconContext } from "react-icons";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="trialsb" style={{ position: "fixed" }}>
      <ProSidebar collapsed={sidebar} className="trySidebar">
        <SidebarHeader>
          <div className="navbar1">
            <Menu>
              <MenuItem icon={<FaIcons.FaBars onClick={showSidebar} />}>
                <div className="harvard">BITS</div>
              </MenuItem>
            </Menu>
            {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className='hp'>PlaTiFi</h1> */}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            {SidebarData.map((item, index) => {
              return (
                <MenuItem
                  icon={item.icon}
                  key={index}
                  onClick={setSidebar}
                  className={item.cName}
                >
                  {/* {item.icon} */}
                  {item.title}
                  <Link to={item.path} />
                </MenuItem>
              );
            })}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default Navbar;
