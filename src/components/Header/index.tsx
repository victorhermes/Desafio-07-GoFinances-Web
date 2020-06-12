import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink exact activeClassName="colorMenu" to="/">
            Listagem
          </NavLink>
          <NavLink activeClassName="colorMenu" to="/import">
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
