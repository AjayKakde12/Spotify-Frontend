import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { Link } from 'react-router-dom';
function Sidebar() {

  const Container = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0px 20px;
  width: 100%;
  background-color: black;
`;

  const Menu = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15%;
  position: sticky;
  top: 0;
  z-index: 999;
  cursor: pointer;
`

  const MenuHome = styled(Menu)`
  color: gray;
  &:hover {
    color: white;
  };
  &:active {
    color: green;
  };
`
  const MenuSearch = styled(Menu)`
  color: gray;
  &:hover {
    color: white;
  };
  &:active {
    color: green;
  };
`
  const MenuLibrary = styled(Menu)`
  color: gray;
  &:hover {
    color: white;
  };
  &:active {
    color: green;
  };
`

  const Icon = styled.div`
  display: flex;
  font-size: xx-large;
  font-weight: 600;
  align-items: center;
`
  const MenuTitle = styled.text`
  display: flex;
  font-size: medium;
  font-weight: 600;
  align-items: center;
  margin-left: 20px;
`
  return (
    <Container>
        <Link to="/" style={{textDecoration: "none"}}>
          <Logo />
        </Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <MenuHome >
            <Icon>
              <HomeIcon />
            </Icon>
            <MenuTitle>
              Home
            </MenuTitle>
          </MenuHome>
        </Link>
        <Link to="/search" style={{textDecoration: "none"}}>
          <MenuSearch >
            <Icon>
              <SearchIcon />
            </Icon>
            <MenuTitle>
              Search
            </MenuTitle>
          </MenuSearch>
        </Link>
        <Link to="/my-library" style={{textDecoration: "none"}}>
          <MenuLibrary >
            <Icon>
              <LibraryMusicIcon />
            </Icon>
            <MenuTitle>
              Your Library
            </MenuTitle>
          </MenuLibrary>
        </Link>
    </Container>
  )
}

export default Sidebar
