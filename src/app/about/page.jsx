import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import TestingNav from '../components/TestingNav'

const page = () => {
  return (
    <Fragment>
        <Navbar />
        <TestingNav />
        <h1>About</h1>
    </Fragment>
  )
}

export default page