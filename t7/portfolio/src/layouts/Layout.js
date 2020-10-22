import React, {useState} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap";

import styles from "./Layout.module.scss";

const Layout = ({children}) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    <>
    <Navbar expand="lg" dark color="primary" fixed="top" className={styles.Sidenav}>
    <NavbarBrand href="#">
      <span class="d-block d-lg-none">Clarence Taylor</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-resume/master/src/assets/img/profile.jpg" alt="" />
      </span>
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  <div className="content">
      {children}
  </div>

  </>
)

}

export default Layout;