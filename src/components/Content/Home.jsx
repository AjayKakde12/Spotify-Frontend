import styled from 'styled-components'
import PreviousSongs from '../Home/PreviousSongs'
import Recommendations from '../Home/Recommendations'
import TopBar from '../Home/TopBar'

const Container = styled.div`
  flex: 6;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0px 20px;
`

function Home() {
  return (
      <Container>
        <TopBar/>
        <PreviousSongs/>
        {/* <Recommendations/> */}
      </Container>
  )
}

export default Home
