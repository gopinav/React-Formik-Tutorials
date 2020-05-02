import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons (props) {
  const { label, name, options, formik, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          console.log(field)
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  id={option.value}
                  type='radio'
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
