import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  UncontrolledTooltip
} from "reactstrap";

class Header extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className={"navbar-main navbar-dark " + (this.props.navbarClass || "")}
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink href="/" className="nav-link-icon">
                        <i className="fa fa-home" />
                        <span className="nav-link-inner--text d-lg-none ml-2">
                          Home
                      </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/contact"
                      id="tooltip333589024"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text ml-2">
                        Contato
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589024">
                      Entre em contato
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Curta nossa página no Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Siga-nos no Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
