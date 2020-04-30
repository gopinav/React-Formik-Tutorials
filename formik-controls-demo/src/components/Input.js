import React from 'react'
import { Field, ErrorMessage } from 'formik'

function Input (props) {
  const { label, name, formik, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
