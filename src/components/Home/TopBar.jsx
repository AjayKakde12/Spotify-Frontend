import React from 'react'
import styled from 'styled-components'
import Profile from '../Topbar/Profile'
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';

function TopBar() {

    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        color: white;
        position: sticky;
        top: 0;
        padding: 5px;
        z-index: 999;
    `
    const SwitchSongs = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20px;
      width: 60px;
    `
    const LeftArrow = styled(KeyboardArrowLeftRoundedIcon)`
      font-size: large;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: green;
      object-fit: cover;
      cursor: pointer;
      &:hover {
        background-color: black;
      }
    `
    const RightArrow = styled(KeyboardArrowRightRoundedIcon)`
    font-size: large;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: green;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
  `
  return (
    <Container>
      <SwitchSongs>
        <LeftArrow />
        <RightArrow />
      </SwitchSongs>
      <Profile />
    </Container>
  )
}

export default TopBar
