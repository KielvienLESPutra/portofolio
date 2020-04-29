import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Icon from '../resource/Logo-KL.png';
import '../css/HeaderStyle.css';
import * as ConstantsVariable from '../../constants/ConstantData';

const MenuList = () => {
    return (
        ConstantsVariable.HEADER_LIST_OBJECT.map((menu) =>
            <Nav.Link key={menu.id} href={menu.url} className="NavLinkStyle">
                {menu.name}
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