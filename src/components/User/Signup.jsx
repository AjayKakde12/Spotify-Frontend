import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Container = styled.div`
  flex: 6;
  align-items: center;
`

const Card = styled.div`
  display: grid;
  padding: 5%;
  background-color: white;
  height: fit-content;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  margin-top: 10%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 3rem;
`

const Formbox = styled(TextField)`
  width: 50%;
  height: 3rem;
  onFocus: {
    border: 1px dashed green;
  }
`

function Signup() {
  return (
    <Container>
        <Card>
          <Formbox
            required
            id='outlined-required'
            label="First Name"
          />
        </Card>
    </Container>
  )
}

export default Signup
