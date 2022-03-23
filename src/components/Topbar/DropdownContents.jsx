import React from 'react'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import styled from 'styled-components'

function DropdownContents() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
        background-color: black;
        position: fixed;
        top: 70px;
        margin: auto;
        z-index: 2;
    `
    const Element = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        font-size: small;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: rgb(84, 84, 84);
        }
    `

  return (
    <Container>
        <Element>
            Account
        </Element>
        <Element>
            Profile
        </Element>
        <Element>
            Upgrade to Premium
            <AddToHomeScreenIcon />
        </Element>
        <Element>
            Logout
        </Element>
    </Container>
  )
}

export default DropdownContents
