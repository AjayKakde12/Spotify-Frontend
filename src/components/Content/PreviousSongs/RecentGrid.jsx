import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SongCart from './SongCart';

const SongsData = [
    {
        thumbnail: "https://wallpaperaccess.com/full/1695791.jpg",
        songName: "Believer",
        artist: "Imaginary Dragons"
    },
    {
        thumbnail: "https://c-cl.cdn.smule.com/rs-s23/arr/f5/9a/a644348d-b071-47a6-aef7-94380c8d3f1d_1024.jpg",
        songName: "Finally found you",
        artist: "Enrique Iglesias"
    },
    {
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/77/Aurora_-_Runaway.png",
        songName: "Runaway",
        artist: "Aurora"
    },
    {
        thumbnail: "https://townsquare.media/site/812/files/2021/02/Eminem-Rap-God-music-video.jpg?w=1200",
        songName: "Rap God",
        artist: "Eminem"
    },
    {
        thumbnail: "https://wallpaperaccess.com/full/1695791.jpg",
        songName: "Believer",
        artist: "Imaginary Dragons"
    },
    {
        thumbnail: "https://c-cl.cdn.smule.com/rs-s23/arr/f5/9a/a644348d-b071-47a6-aef7-94380c8d3f1d_1024.jpg",
        songName: "Finally found you",
        artist: "Enrique Iglesias"
    }
]

const Container = styled.div`
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 60px;
    grid-gap: 3rem;
`

function RecentGrid() {
    return (
        <Container>
            {
                SongsData.map((song, index) => {
                    return (
                        <SongCart
                            songName={song.songName}
                            artist={song.artist}
                            index={index}
                            thumbnail={song.thumbnail}
                        />
                    )
                })
            }
        </Container>
    )
}

export default RecentGrid
