import styled from 'styled-components'
import TopBar from '../Home/TopBar'

const Container = styled.div`
  flex: 6;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0px 20px;
`

function SearchMenu() {
  return (
    <Container>
        <TopBar />
    </Container>
  )
}

export default SearchMenu
