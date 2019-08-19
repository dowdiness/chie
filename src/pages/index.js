import React from "react"
import styled from '@emotion/styled'
import Header from '../components/header'

const Text = styled.p`
  color: blue;
`

export default () => (
  <div className="container mx-auto w-screen h-screen flex items-center justify-center">
    <Header></Header>
    <h1 className="font-bold text-xl">Hello world!</h1>
    <Text>tailwind macro</Text>
  </div>
)
