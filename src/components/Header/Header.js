import React from 'react'
import { Container, FormControl, Navbar, Dropdown, Badge, Nav } from 'react-bootstrap'
import styles from './header.module.css';
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
          <Navbar.Brand>
            <Link to ='/' className={styles.link}>Shopping Store</Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl className='m-auto' style={{width:400}} placeholder='Search a product'>
            </FormControl>
            </Navbar.Text>
           <Nav>
           <Dropdown alignright >
                <Dropdown.Toggle variant="success">
                <FaShoppingCart color ="white" fontSize= "25px"/>
                  <Badge>{10}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth : 370}}>
                  <span style={{padding: 10}}>empty</span>
                </Dropdown.Menu>
            </Dropdown>
           </Nav>
        </Container>
    </Navbar>
  )
}
