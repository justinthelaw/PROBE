import React from 'react';
import Navbar from "react-bootstrap/navbar";
import NavB from "react-bootstrap/nav";

export const Nav = () => (
    <Navbar bg="dark" variant="dark" className="p-2">
        <Navbar.Brand href="/">SpaceIntel</Navbar.Brand>
         
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavB className="mr-auto">
                    <NavB.Link href="satellites">Satellites</NavB.Link>
                    <NavB.Link href="schemas">Schemas</NavB.Link>
                    {/* <NavB.Link href="sources">Data Sources</NavB.Link> */}
                    <NavB.Link href="about">About</NavB.Link>
                </NavB>
            </Navbar.Collapse>
    </Navbar>
  );