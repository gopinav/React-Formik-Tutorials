import React from 'react'
import Input from './Input'
import Textarea from './Textarea'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
  }
}

export default FormikControl
