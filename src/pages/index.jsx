import React, { Fragment } from 'react'
import './index.css'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import { Logo } from '../components/Logo'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

const Container = styled.div`
  ${tw`h-screen w-screen flex justify-center items-center flex-col`}
`
const Image = styled(GatsbyImage)`
  ${tw`w-64 h-64 m-4 rounded-full`}
`

export default ({
  data: {
    file: {
      childImageSharp: { fluid: logoFluid },
    },
  },
}) => (
  <Fragment>
    <Helmet>
      <title>Jaff Parker</title>
    </Helmet>
    <Container>
      <Image fluid={logoFluid} />
      <Logo />
    </Container>
  </Fragment>
)

export const query = graphql`
  {
    file(relativePath: { eq: "AndreyBogdanov2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
