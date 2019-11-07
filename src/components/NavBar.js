import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  height: 82px;
  margin: -8px;
  padding: 8px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
`

const NavLeft = styled.div`
  width: 100%;
  text-align: left;
`

const NavRight = styled.div`
  width: 100%;
  text-align: right;
`

const NavbarItem = styled.a`
  font-size: 1rem;
  margin-right: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Logo = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 8px;
`

const Button = styled.button`
  background-color: rgb(219, 55, 66);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  color: white;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <NavLeft>
        <Logo />
        <NavbarItem>Aperçu</NavbarItem>
        <NavbarItem>Configurer</NavbarItem>
        <NavbarItem>Sécurité</NavbarItem>
        <NavbarItem>Finances</NavbarItem>
      </NavLeft>
      <NavRight>
        <NavbarItem>Revenu mensuel potentiel</NavbarItem>
        <NavbarItem>1 336€</NavbarItem>
        <Button>Commencer</Button>
      </NavRight>
    </Wrapper>
  )
}

export default Navbar
