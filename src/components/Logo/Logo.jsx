import React from 'react'
import styled from 'styled-components'

const HomeLogo = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  color: white;
  align-items: center;
  cursor: pointer;
`
const LogoImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.text`
  font-size: x-large;
  font-weight: bold;
`

function Logo() {
  return (
    <HomeLogo>
      <LogoImage src='/Logo/spotifyLogo.png' />
      <Name>Spotify</Name>
    </HomeLogo>
  )
}

export default Logo
