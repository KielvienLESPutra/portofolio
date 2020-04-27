import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Icon from '../resource/Logo-KL.png';
import '../css/HeaderStyle.css';
import * as ConstantsVariable from '../../constants/ConstantData';

const MenuList = () => {
    let counter = 0;
    return (
        ConstantsVariable.HEADER_LIST.map((menu) =>
            <Nav.Link eventKey={counter++} href="#deets" className="NavLinkStyle">
                {menu}
            </Nav.Link>
        )
    )
}

const HeaderBody = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src={Icon}
                    alt="Icon"
                    className="IconBodyStyle"
                />
                Kielvien Lourensius Eka Setia Putra
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <MenuList />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderBody;