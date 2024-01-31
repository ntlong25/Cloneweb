import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { routerCategories } from "../../route";
import { Link, useLocation } from "react-router-dom";
import "../styles/main.css";

export default function NavbarComponent() {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarContainer">
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navContainer" navbarScroll>
            {routerCategories().map((item, index) => {
              return (
                <>
                  {!item?.children ? (
                    <Nav
                      key={item.name + index}
                      className={
                        item.path === location.pathname
                          ? "navbarNavActive"
                          : "navbar-nav itemHover"
                      }
                    >
                      <Link
                        key={item.name}
                        to={`${item.path}`}
                        className="navbarLink"
                      >
                        {item.name}
                      </Link>
                    </Nav>
                  ) : (
                    <NavDropdown
                      key={item.name + index}
                      title={item.name}
                      id="navbarScrollingDropdown"
                      className="navbarDropdown itemHover"
                    >
                      {item.children.map((child, index) => {
                        return (
                          <>
                            <Nav
                              key={"child" + index}
                              className="dropdownContainer"
                            >
                              <Link
                                key={child.name}
                                to={item.path + "/" + child.path}
                                className="dropdownChild"
                              >
                                {child.name}
                              </Link>
                            </Nav>
                            <NavDropdown.Divider />
                          </>
                        );
                      })}
                    </NavDropdown>
                  )}
                </>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
