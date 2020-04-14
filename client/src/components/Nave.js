import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap';
 
 
const Nave = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
        <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
    <NavbarBrand href="/">Tasks</NavbarBrand>
    <NavbarToggler onClick={toogle}/>
    <Collapse isOpen={isOpen} navbar>
         <Nav className="ml-auto" navbar>
                        <NavItem>  
                            <NavLink href="www.github.com">
                            Github
                            </NavLink>                
        </NavItem>  
        </Nav>                
    </Collapse>
        </Container>
        </Navbar>
    </Fragment>
 )
   
  

  

  
};

 

export default  Nave