import React from 'react'
import styled from 'styled-components'
import RecentGrid from '../Content/PreviousSongs/RecentGrid'
import Sidebar from '../sidebar/Sidebar'

function PreviousSongs() {
  const Container = styled.div`
        width: 100%;
        height: 60px;
        padding: 20px 20px 0px 20px;
    `
  const SectionTitle = styled.text`
      font-size: 30px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: 600;
      color: white;
    `

  return (
    <Container>
      <SectionTitle>
        Recents
      </SectionTitle>
      <RecentGrid />
    </Container>
  )
}

export default PreviousSongs
