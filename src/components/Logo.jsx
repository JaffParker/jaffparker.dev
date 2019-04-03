//@flow
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const LogoContainer = styled.div`
  font-size: 4em;

  @media screen and (max-width: 400px) {
    font-size: 16vw;
  }

  span {
    display: inline-block;
    padding: 0 0.3em;
    line-height: 1.5;
  }
`
const LogoLight = styled.span`
  ${tw`text-grey-darkest`}
`
const LogoDark = styled.span`
  ${tw`text-grey-lighter bg-grey-darkest`}
`

export const Logo = () => (
  <LogoContainer>
    <LogoLight>Jaff</LogoLight>
    <LogoDark>Parker</LogoDark>
  </LogoContainer>
)
