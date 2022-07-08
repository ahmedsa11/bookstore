import React from 'react'
import Signup from './signin'
import Signin from './signup'

function Form() {
  return (
    <>
    <div className='formuser'>
    <Signin/>
    <Signup/>
    </div>
    </>
  )
}

export default Form