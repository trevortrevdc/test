import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: DarkGray;
    }
  }
`

const activeLinkStyle = {
  color: 'DarkGray',
}

const Menu = () => {
  return (
    <Header>
    <Link to="/" exact activeStyle={activeLinkStyle}>
    <img src={logo} alt="Logo" width="200px" height="auto"/>
    </Link>
 {/*     <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
            
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
        </ul>
      </Nav> */}
    </Header>
  )
}

export default Menu
