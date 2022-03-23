import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DropdownContents from './DropdownContents';


function Profile() {

    const [toggleDropdown, settoggleDropdown] = useState(false)

    const changeDropPosition = () => {
        return settoggleDropdown(!toggleDropdown)
    }

    const ToggleDropdown = () => {
        if(toggleDropdown) {
            return <>
                <ArrowDropUpIcon />
            </>
        }
        else {
            return <>
                <ArrowDropDownIcon />
            </>
        }
    }

    const Container = styled.div`
        display: flex;
        position: relative;
        flex-direction: column;
    `
    const ProfileContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 40px;
        width: auto;
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 40px 40px 40px 40px;
        margin-right: 40px;
        cursor: pointer;
    `
    const ProfilePicture = styled.img`
        height: 40px;
        width: 40px;
        border-radius: 50%;
    `
    const ProfileName = styled.text`
        font-size: medium;
        font-weight: 600;
        margin-left: 20px;
    `
    return (
        <Container>
            <ProfileContainer onClick={changeDropPosition}>
                <ProfilePicture src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJaY-3Tr6aM6hjKAadiLA7lXVk8rcLTBdnTp3V1-XWX5amu50M' />
                <ProfileName>
                    Ajay Kakde
                </ProfileName>
                <ToggleDropdown />
            </ProfileContainer>
            {
                toggleDropdown && <DropdownContents />
            }
        </Container>
    )
}

export default Profile
