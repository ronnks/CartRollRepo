import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { useUI, useProvideCart } from "../hooks";
import CartSidebar from "./CartSidebar";

function Header() {
  const { openSidebar } = useUI();
  const { state } = useProvideCart();

  return (
    <>
      <CartSidebar />
      <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>
              <img src="/logo.png" alt="logo" width="142px" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/`}
                style={{ color: "white", marginRight: "20px" }}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                className="d-flex align-items-center ms-1"
                onClick={openSidebar}
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                <span>Cart</span>
                <FontAwesomeIcon
                  className="ms-2 mb-1"
                  icon={faShoppingBag}
                  style={{ color: "white" }}
                />
                {state.itemCount > 0 && (
                  <Badge
                    pill
                    style={{ color: "black" }}
                    variant="primary"
                    className="mb-4 me-2"
                  >
                    <p className="mb-0">{state.itemCount}</p>
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
