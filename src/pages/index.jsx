import React, { Fragment } from 'react'
import './index.css'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import { Logo } from '../components/Logo'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Icon as FAIcon } from '../components/Icon'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

const Container = styled.div`
  ${tw`h-screen w-screen flex justify-center items-center flex-col`}
`
const Image = styled(GatsbyImage)`
  ${tw`w-64 h-64 m-4 rounded-full`}
`
const IconContainer = styled.section`
  ${tw`h-auto m-4`}
`
const Icon = styled(FAIcon)`
  ${tw`m-1 text-3xl text-grey-darkest hover:text-blue`}
`
// const Divider = styled.hr`
//   ${tw`w-32 mb-6 bg-grey`}
//   height: 1px;
// `

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
      <IconContainer>
        <a
          href="https://twitter.com/jaffparker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/andreykamozin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faLinkedin} />
        </a>
        <a
          href="mailto:andreykamozin@gmail.com?subject=Hi%20from%20the%20website!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faEnvelope} />
        </a>
      </IconContainer>
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
