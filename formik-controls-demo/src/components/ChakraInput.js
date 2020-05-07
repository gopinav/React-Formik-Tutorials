import React from 'react'
import { Field } from 'formik'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/core'

function ChakraInput (props) {
  const { label, name, ...rest } = props
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default ChakraInput
