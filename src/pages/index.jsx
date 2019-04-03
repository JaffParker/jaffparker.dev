import React, { Fragment } from 'react'
import './index.css'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import { Logo } from '../components/Logo'

const Container = styled.div`
  ${tw`h-screen w-screen flex justify-center items-center`}
`

export default () => (
  <Fragment>
    <Helmet>
      <title>Jaff Parker</title>
    </Helmet>
    <Container>
      <Logo />
    </Container>
  </Fragment>
)
