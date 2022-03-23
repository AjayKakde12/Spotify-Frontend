import React, { useState } from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5rem;
    width: auto;
    margin: 10px 20px 10px 10px;
    background-color: #2F2F2F;
    border-radius: 24px 24px 24px 24px;
    -webkit-border-radius: 24px 24px 24px 24px;
    -moz-border-radius: 24px 24px 24px 24px;
    &:hover {
        background-color: #585656;
        cursor: pointer;
    };
`
const Thumbnail = styled.img`
    height: 100%;
    width: 5rem;
    object-fit: cover;
    border-radius: 24px 0px 0px 24px;
    -webkit-border-radius: 24px 0px 0px 24px;
    -moz-border-radius: 24px 0px 0px 24px;
    box-shadow: 10px 3px 24px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 3px 24px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 3px 24px -2px rgba(0,0,0,0.75);
`
const Songinfo = styled.text`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Songname = styled.text`
    font-size: medium;
    font-weight: 900;
`
const Artist = styled.div`
    margin-top: 5px;
    font-size: small;
`

const PlayButton = styled.img`
    float: right;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border-bottom: 4px solid #459b2b;
    cursor: default;
    transition: transform .2s;
    &:hover {
        transform: scale(1.5); 
    }
`


function SongCart(props) {
    const [visibility, setvisibility] = useState(false);

    function changeVisibilityStatus(status) {
        setvisibility(status);
        console.log("VISIBILITY: ", visibility)
    }

    return (
        <Item key={props.index.toString()}
            onMouseEnter={e => changeVisibilityStatus(true)}
            onMouseLeave={e => changeVisibilityStatus(false)}>
            <Thumbnail src={props.thumbnail} />
            <Songinfo>
                <Songname>
                    {props.songName}
                </Songname>
                <Artist>
                    {props.artist}
                </Artist>
            </Songinfo>
            {
                visibility ? <PlayButton src='Logo/PlayButton.png' /> : null
            }
        </Item>
    )
}

export default SongCart
